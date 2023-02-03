import React from "react";
import { Icon } from "semantic-ui-react";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./HeaderStyles"

const Header = () => {

     return (
          <HeaderContainer>
            <LogoContainer to="/">
              <Icon  name="home" size="large" />
            </LogoContainer>
            <OptionsContainer>
              <OptionLink to="/mapper">MAP</OptionLink>
              <OptionLink to="/postitform">NOTE FORM</OptionLink>
              <OptionLink to="/notescontainer">SEE NOTES</OptionLink>
              {/* {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                  SIGN OUT
                </OptionLink>
              ) : (
                <OptionLink className="option" to="/signin">
                  SIGN IN
                </OptionLink>
              )} */}
            
            </OptionsContainer>
          
          </HeaderContainer>
        );

}

export default Header 