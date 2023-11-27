const Text = ({text}) =>{
    


    // if (isLoggedIn) {
    //     button = <LogoutButton onClick={this.handleLogoutClick} />;
    //   } else {
    //     button = <LoginButton onClick={this.handleLoginClick} />;
    //   }

    // The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    // </div>
    
    return(
        <>
        {/* {text.content.length> 5 &&
            <h2>
              You have more than {text.content.length} words in this text, click on More to see the rest.
              <button>More</button>
            </h2>
          }
        <div> Helloooo World you have {text.content.length} word in this text</div> */}

        User has <b>{text.content.length > 9? 'more than 3 words':'less than 3 words' }</b>
        </>
    )
}

export default Text;