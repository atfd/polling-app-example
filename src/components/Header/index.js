import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
  ${props => props.backgroundColor};
  margin-bottom: 1.45rem;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Heading1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BACKGROUND_COLOR =
  'background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)';

const Header = ({ backgroundColor }) => (
  <HeaderContainer backgroundColor={backgroundColor}>
    <HeaderWrapper>
      <Heading1>
        <StyledLink to="/">Polling App</StyledLink>
      </Heading1>
    </HeaderWrapper>
  </HeaderContainer>
);

Header.defaultProps = {
  backgroundColor: BACKGROUND_COLOR,
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Header;
