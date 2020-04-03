import React from 'react'
function GoogleBtn() {

    
const auth2 = gapi.auth2.init()
     
if (auth2.isSignedIn.get()) {
    var profile = auth2.currentUser.get().getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

    return (
    <div>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
    )
}

export default GoogleBtn;