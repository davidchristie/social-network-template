import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation, Query } from "react-apollo";
import UpdatePasswordMutation, {
  UpdatePasswordData,
  UpdatePasswordVariables,
} from "../../mutations/UpdatePassword";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import Content from "./Content";

const UpdatePasswordForm: React.StatelessComponent<{}> = () => {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {accountResult => {
        const accountData = accountResult.data;
        if (accountResult.error) {
          return <Alert>{accountResult.error.message}</Alert>;
        }
        if (!accountData || accountResult.loading) {
          return <Loading />;
        }
        return (
          <Mutation<UpdatePasswordData, UpdatePasswordVariables>
            mutation={UpdatePasswordMutation}
          >
            {(updatePassword) => (
              <Content accountData={accountData} updatePassword={updatePassword} />
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default UpdatePasswordForm;
