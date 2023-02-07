import React, { FC } from "react";
import styles from "./InputForm.module.scss";
import { Form, Button } from "reactstrap";
import InputFormGroup from "../InputFormGroup/InputFormGroup";

interface InputFormProps {}

const InputForm: FC<InputFormProps> = () => (
  <div className={styles.InputForm} data-testid="InputForm">
    <Form>
      <InputFormGroup name="NAME" placeholderValue=""/>
      <InputFormGroup name="AGE" placeholderValue=""/>
      <InputFormGroup name="PARENTS AGE" placeholderValue=""/>
      <InputFormGroup name="TOTAL ANNUAL INCOME (A)" placeholderValue="0.00"/>
      <br />
      <hr />
      <br />
      <h2>Enter Your Investments</h2>
      <h3>UNDER SECTION 80</h3>
      <h3>80C (B)</h3>
      <br />
      <InputFormGroup name="LIFE INSURANCE PREMIUM" placeholderValue="0.00"/>
      <InputFormGroup name="UNIT LINKED INSURANCE" placeholderValue="0.00"/>
      <InputFormGroup name="ELSS" placeholderValue="0.00"/>
      <InputFormGroup name="CHILDREN TUITION FEE" placeholderValue="0.00"/>
      <InputFormGroup name="EPF / NPS" placeholderValue="0.00"/>
      <InputFormGroup name="PPF" placeholderValue="0.00"/>
      <InputFormGroup name="CONTRIBUTION TO SSY" placeholderValue="0.00"/>
      <InputFormGroup name="TAX SAVING FD" placeholderValue="0.00"/>
      <InputFormGroup name="NSC" placeholderValue="0.00"/>
      <InputFormGroup name="PRINCIPAL ON HOME LOAN" placeholderValue="0.00"/>
      {/* RESULT */}
      <InputFormGroup name="GROSS TOTAL  (B)" placeholderValue="0.00"/>
      <br />
      <InputFormGroup name="NPS 80CCD(1B)  (C)" placeholderValue="0.00"/>
      <br />
      {/* RESULT */}
      <InputFormGroup name="NET DEDUCTIONS UNDER SEC 80C (B+C)" placeholderValue="0.00"/>
      <br />
      <InputFormGroup name="SECTION 80GG HRA  (D)" placeholderValue="0.00"/>
      <InputFormGroup name="SEC 80E INTEREST ON EDUCATION LOAN  (E)" placeholderValue="0.00"/>
      <InputFormGroup name="SEC 80EEA INTEREST ON HOME LOAN  (F)" placeholderValue="0.00"/>
      <br />
      <h3>SECTION 80D (G)</h3>
      <InputFormGroup name="1. HEALTH INSURANCE FOR SELF" placeholderValue="0.00"/>
      <InputFormGroup name="2. HEALTH INSURANCE FOR PARENTS" placeholderValue="0.00"/>
      {/* RESULT */}
      <InputFormGroup name="TOTAL DEDUCTION UNDER 80D  (G)" placeholderValue="0.00"/>
      <br />
      <InputFormGroup name="SECTION 24B HOME LOAN INTEREST  (H)" placeholderValue="0.00"/>
      <InputFormGroup name="SECTION 80EEB INTEREST ON EV  (I)" placeholderValue="0.00"/>
      <InputFormGroup name="STANDARD DEDUCTION  (J)" placeholderValue="0.00"/>
      <InputFormGroup name="LTA  SECTION 10(5)  (K)" placeholderValue="0.00"/>
      <InputFormGroup name="OTHERS  (L)" placeholderValue="0.00"/>
      <Button color="success" size="lg">
        Calculate
      </Button>
      <Button style={{marginLeft:"1%"}} color="warning" size="lg">
        Reset
      </Button>
      <br />
      <br />
      {/* RESULT */}
      <InputFormGroup name="TOTAL DEDUCTIONS (M) (B+C+D+E+F+G+H+I+J+K+L)" placeholderValue="0.00"/>
      {/* RESULT */}
      <InputFormGroup name="NET TAXABLE INCOME  (A-M)" placeholderValue="0.00"/>
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
