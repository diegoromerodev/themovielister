import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";

const LighterNavContainer = styled.aside`
  background-color: ${ColorPalette.gray}7a;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  span {
    color: ${ColorPalette.light};
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease-out;
    padding: 0.5rem 1rem;
    text-align: center;
    background-color: ${ColorPalette.gray};
    border-radius: 5rem;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover {
      font-weight: 700;
      background-color: ${ColorPalette.lightGray}7a;
    }
    &.curr-url {
      background: ${ColorPalette.darker};
      color: ${ColorPalette.light};
      font-weight: 700;
      border: 2px solid ${ColorPalette.light};
    }
  }
  p {
    color: ${ColorPalette.light};
    font-weight: 100;
    opacity: 0.4;
  }
`;

enum AuthTypes {
  Auth,
  Unauth,
  Both,
}

interface MenuOption {
  name: string;
  path: string;
  showWhen: AuthTypes;
}

function SecondaryNav() {
  const [appData]: AppDataContext = useContext(AppContext);
  const router = useRouter();
  const menuOptions: MenuOption[] = [
    {
      name: "Home",
      path: "/",
      showWhen: AuthTypes.Both,
    },
    {
      name: "Create account",
      path: "/auth/signup",
      showWhen: AuthTypes.Unauth,
    },
    {
      name: "Login",
      path: "/auth/login",
      showWhen: AuthTypes.Unauth,
    },
    {
      name: "Create post",
      path: "/posts/create",
      showWhen: AuthTypes.Auth,
    },
    {
      name: "My account",
      path: `/users/${appData?.userData?.id}`,
      showWhen: AuthTypes.Auth,
    },
  ];

  return (
    <LighterNavContainer>
      {menuOptions.reduce((options, opt) => {
        const optionAuthType = appData?.userData?.username
          ? AuthTypes.Auth
          : AuthTypes.Unauth;
        if (
          opt.showWhen === optionAuthType ||
          opt.showWhen === AuthTypes.Both
        ) {
          options.push(
            <Link key={opt.path + opt.name} href={opt.path} passHref>
              <span className={router.asPath === opt.path ? "curr-url" : ""}>
                {opt.name}
              </span>
            </Link>
          );
        }
        return options;
      }, [])}
    </LighterNavContainer>
  );
}

export default SecondaryNav;
