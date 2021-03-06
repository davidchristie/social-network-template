import React from "react";
import Button from "../Button";
import Modal from "../Modal";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
}

export default class ConfirmationModal extends React.Component<Props> {
  public render () {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleCancel}
      >
        {this.props.children}
        <hr />
        <Button onClick={this.handleConfirm}>
          Confirm
        </Button>
        <Button onClick={this.handleCancel}>
          Cancel
        </Button>
      </Modal>
    );
  }

  private handleCancel = () => {
    this.props.onCancel();
  }

  private handleConfirm = () => {
    this.props.onConfirm();
  }
}
