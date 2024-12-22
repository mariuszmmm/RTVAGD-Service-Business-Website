import { ListItem, NavList, StyledLink } from "../styled";
import { SubNavWrapper } from "./styled";
import { usePathname } from 'next/navigation';

const SubNav = ({ showSubNav }) => {
  const pathname = usePathname()

  return (
    <SubNavWrapper $show={showSubNav}>
      <NavList $subNav>
        <ListItem >
          <StyledLink
            href="/naprawa-pralek"
            $active={pathname === "/naprawa-pralek/" && showSubNav}
            $subNav
          >
            Naprawa pralek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-suszarek"
            $active={pathname === "/naprawa-suszarek/" && showSubNav}
            $subNav
          >
            Naprawa suszarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-zmywarek"
            $active={pathname === "/naprawa-zmywarek/" && showSubNav}
            $subNav
          >
            Naprawa zmywarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-ekspresow"
            $active={pathname === "/naprawa-ekspresow/" && showSubNav}
            $subNav
          >
            Naprawa ekspresów
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-telewizorow"
            $active={pathname === "/naprawa-telewizorow/" && showSubNav}
            $subNav
          >
            Naprawa telewizorów
          </StyledLink>
        </ListItem>
      </NavList>
    </SubNavWrapper>
  );
};

export default SubNav;