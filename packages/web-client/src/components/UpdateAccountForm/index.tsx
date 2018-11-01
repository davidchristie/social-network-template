import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { Mutation, Query } from "react-apollo";

import UpdateAccountMutation, {
  UpdateAccountData,
  UpdateAccountVariables,
} from "../../mutations/UpdateAccount";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";

interface Props {
  data: AccountData;
}

interface State {
  email: string;
}

class UpdateAccountForm extends React.Component<Props, State> {
  public state: State = {
    email: this.props.data.account!.email,
  };

  public render () {
    return (
      <Mutation<UpdateAccountData, UpdateAccountVariables>
        mutation={UpdateAccountMutation}
        variables={{
          data: {
            email: this.state.email,
          },
        }}
      >
        {(updateAccount) => (
          <Section className="UpdateAccountForm">
            <h2>Account</h2>
            <form
              onSubmit={(event: React.FormEvent) => {
                event.preventDefault();
                updateAccount();
              }}
            >
              <Input
                id="update-account-email"
                label="Email Address"
                name="email"
                onChange={this.emailChanged}
                required={true}
                type="email"
                value={this.state.email}
              />
              <Button type="submit">Save</Button>
            </form>
          </Section>
        )}
      </Mutation>
    );
  }

  private emailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  }
}

export default function UpdateAccountFormContainer () {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading) {
          return "Loading";
        }
        return <UpdateAccountForm data={data!} />;
      }}
    </Query>
  );
}
