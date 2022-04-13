use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    pub names: UnorderedMap<AccountId, String>,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new() -> Self {
        Self {
            names: UnorderedMap::new(b"s".to_vec()),
        }
    }
    
    pub fn hello(&mut self, name: String) -> String { 
        format!("Hello {}!", name)
    }
    
    #[payable]
    pub fn remember_me(&mut self, name: String) -> String {   
        if env::attached_deposit() != 0 {
            env::log_str(format!("Thanks for the {} NEAR.", env::attached_deposit()).as_str())
        }
        else {
            near_sdk::env::panic(b"You need to deposit x NEAR in order to use this funtion. Storage is expensive...");
        }
        self.names.insert(&env::predecessor_account_id(), &name);
        format!("Hello {}!", name)
    }
    
    pub fn get_last_message(self, account_id: AccountId) -> Option<String> { 
        let name = self.names.get(&account_id)
        if name.is_some(){
            format!("Hello {}!", name.unwrap())
        }
        else{
            "I don't remember you."
        }
    }
    
    pub fn count_remembered_names(self, account_id: AccountId) -> u64 { 
        self.names.len()
    }
    
    pub fn get_updates(&self, from_index: u64, limit: u64) -> Vec<(AccountId, String)> {
        let keys = self.names.keys_as_vector();
        let values = self.names.values_as_vector();
        (from_index..std::cmp::min(from_index + limit, self.names.len()))
            .map(|index| (keys.get(index).unwrap(), values.get(index).unwrap()))
            .collect()
    }
}

/*
 * the rest of this file sets up unit tests
 * to run these, the command will be:
 * cargo test --package rust-template -- --nocapture
 * Note: 'rust-template' comes from Cargo.toml's 'name' key
 */

// use the attribute below for unit tests
#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::{VMContextBuilder};
    //use near_sdk::test_utils::{get_logs, VMContextBuilder};
    use near_sdk::{testing_env, AccountId};

    // part of writing unit tests is setting up a mock context
    // provide a `predecessor` here, it'll modify the default context
    fn get_context(predecessor: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder.predecessor_account_id(predecessor);
        builder
    }

    #[test]
    fn check_hello_world() {
        // Get Alice as an account ID
        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice);
        testing_env!(context.build());

        // Set up contract object and call the new method
        let mut contract = Contract::new();
        let result = contract.hello("Alice".to_string());
        assert_eq!(result, "Hello Alice!".to_string(), "Expected correct hello response.");
        //assert_eq!(get_logs(), ["Try again."], "Expected a failure log.");
    }

    #[test]
    fn remember_me_says_hello() {
        // Get Alice as an account ID
        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice);
        context.attached_deposit = 1000;
        testing_env!(context.build());

        // Set up contract object and call the new method
        let mut contract = Contract::new();
        let result = contract.remember_me("Alice".to_string());
        assert_eq!(result, "Hello Alice!".to_string(), "Expected correct hello response.");
    }
}
