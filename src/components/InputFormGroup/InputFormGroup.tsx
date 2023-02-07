import React, { FC } from "react";
import styles from "./InputFormGroup.module.scss";
import { FormGroup, Label, Col, Input } from "reactstrap";

interface InputFormGroupProps {
  name: string,
  placeholderValue: string
}

const InputFormGroup: FC<InputFormGroupProps> = ({name, placeholderValue}) => (
  <div className={styles.InputFormGroup} data-testid="InputFormGroup">
    <FormGroup row>
      <Label for="exampleText" sm={5}>
        {name}
      </Label>
      <Col sm={5}>
        <Input id="exampleText" name="text" type="textarea" placeholder={placeholderValue}/>
      </Col>
    </FormGroup>
  </div>
);

export default InputFormGroup;
