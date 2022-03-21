class AuthenticationService {
    login(username,password){
        console.log(username);
        sessionStorage.setItem('authenticUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticUser');
        if(user === null) return false;
        else return true;
    }
    
}

export default new AuthenticationService()