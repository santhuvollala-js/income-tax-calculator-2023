import React, { FC } from "react";
import styles from "./InputForm.module.scss";
import { Form, Button } from "reactstrap";
import InputFormGroup from "../InputFormGroup/InputFormGroup";

interface InputFormProps {}

const InputForm: FC<InputFormProps> = () => (
  <div className={styles.InputForm} data-testid="InputForm">
    <Form>
      <InputFormGroup name="NAME" />
      <InputFormGroup name="AGE" />
      <InputFormGroup name="PARENTS AGE" />
      <InputFormGroup name="TOTAL ANNUAL INCOME (A)" />
      <br />
      <hr />
      <br />
      <h2>DEDUCTIONS</h2>
      <h3>UNDER SECTION 80</h3>
      <h3>80C (B)</h3>
      <br />
      <InputFormGroup name="LIFE INSURANCE PREMIUM" />
      <InputFormGroup name="UNIT LINKED INSURANCE" />
      <InputFormGroup name="ELSS" />
      <InputFormGroup name="CHILDREN TUITION FEE" />
      <InputFormGroup name="EPF / NPS" />
      <InputFormGroup name="PPF" />
      <InputFormGroup name="CONTRIBUTION TO SSY" />
      <InputFormGroup name="TAX SAVING FD" />
      <InputFormGroup name="NSC" />
      <InputFormGroup name="PRINCIPAL ON HOME LOAN" />
      {/* RESULT */}
      <InputFormGroup name="GROSS TOTAL  (B)" />
      <br />
      <InputFormGroup name="NPS 80CCD(1B)  (C)" />
      <br />
      {/* RESULT */}
      <InputFormGroup name="NET DEDUCTIONS UNDER SEC 80C (B+C)" />
      <br />
      <InputFormGroup name="SECTION 80GG HRA  (D)" />
      <InputFormGroup name="SEC 80E INTEREST ON EDUCATION LOAN  (E)" />
      <InputFormGroup name="SEC 80EEA INTEREST ON HOME LOAN  (F)" />
      <br />
      <h3>SECTION 80D (G)</h3>
      <InputFormGroup name="1. HEALTH INSURANCE FOR SELF" />
      <InputFormGroup name="2. HEALTH INSURANCE FOR PARENTS" />
      {/* RESULT */}
      <InputFormGroup name="TOTAL DEDUCTION UNDER 80D  (G)" />
      <br />
      <InputFormGroup name="SECTION 24B HOME LOAN INTEREST  (H)" />
      <InputFormGroup name="SECTION 80EEB INTEREST ON EV  (I)" />
      <InputFormGroup name="STANDARD DEDUCTION  (J)" />
      <InputFormGroup name="LTA  SECTION 10(5)  (K)" />
      <InputFormGroup name="OTHERS  (L)" />
      <Button color="success" size="lg">
        Calculate
      </Button>
      <Button style={{marginLeft:"1%"}} color="warning" size="lg">
        Reset
      </Button>
      <br />
      <br />
      {/* RESULT */}
      <InputFormGroup name="TOTAL DEDUCTIONS (M) (B+C+D+E+F+G+H+I+J+K+L)" />
      {/* RESULT */}
      <InputFormGroup name="NET TAXABLE INCOME  (A-M)" />
    </Form>
    <br />
    <hr />
    <br />
    <br />
    <h2>TAX PAYABLE AS PER OLD REGIME</h2>
    <h1 className="finalValue">VALUE</h1>
    <h2>TAX PAYABLE AS PER NEW REGIME</h2>
    <h1 className="finalValue">VALUE</h1>
    <div style={{height:"300px"}}></div>
  </div>
);

export default InputForm;
