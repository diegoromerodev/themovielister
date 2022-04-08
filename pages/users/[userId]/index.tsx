import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { UserSchema } from "../../../lib/types";

function UserDetailsHandler({ userData }: { userData: UserSchema }) {
  return (
    <div>
      <h1>{userData.username}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(`${process.env.API_URL}/api/users/${context.query.userId}`);
  const userDataRes = await axios.get(
    `${process.env.API_URL}/api/users/${context.query.userId}`
  );
  console.log({ userDataRes });
  const userData = userDataRes.data;
  return {
    props: {
      userData,
    },
  };
};

export default UserDetailsHandler;
