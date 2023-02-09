import React, { FC, useState } from "react";
import styles from "./InputForm.module.scss";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

interface InputFormProps {}

const InputForm: FC<InputFormProps> = () => {

  const inititalState = {
    name: "",
    age: "",
    parentsAge: "",
    totalIncome: "",
    lic: "",
    uli: "",
    elss: "",
    tuition: "",
    epf: "",
    ppf: "",
    ssy: "",
    fd: "",
    nsc: "",
    pHomeLoan: "",
    nps: "",
    hra: "",
    edu: "",
    iHomeLoan: "",
    sIns: "",
    pIns: "", 
    iHomeLoan24B: "", 
    ev: "",
    sDed: "",
    lta: "",
    others: ""
  };

  const [data, setData] = useState(inititalState);

  const { name, age, parentsAge, totalIncome, lic, 
    uli, elss, tuition, epf, ppf, ssy, fd, nsc, pHomeLoan, 
    nps, hra, edu, iHomeLoan, sIns, pIns, iHomeLoan24B, ev, sDed, lta, others } = data;

  const [grossTotalB, setGrossTotalB]               = useState(0);
  const [total80C, setTotal80C]                     = useState(0);
  const [total80D, setTotal80D]                     = useState(0);
  const [totalDed, setTotalDed]                     = useState(0);
  const [netTaxableIncome, setNetTaxableIncome]     = useState(0);
  const [oldRegimeTaxAmount, setOldRegimeTaxAmount] = useState(0);
  const [newRegimeTaxAmount, setNewRegimeTaxAmount] = useState(0);

  const percentage = (num:number, per:number) => (num / 100) * per;

  const resetHandler = () => {
    setData({...inititalState});
    setGrossTotalB(0);
    setTotal80C(0);
    setTotal80D(0);
    setTotalDed(0);
    setNetTaxableIncome(0);
    setOldRegimeTaxAmount(0);
    setNewRegimeTaxAmount(0);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, [event.target.name]:[event.target.value]});
  }

  const handleFinalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ageEntered = Number(age);
    const totalIncomeEntered = Number(totalIncome);
    const twoHalfLakhs = 250000;
    const fiveLakhs = 500000;
    const tenLakhs = 1000000;
    const fifteenLakhs = 1500000;

    // Section 80C Calculations
    let totalB =
      Number(lic) +
      Number(uli) +
      Number(elss) +
      Number(tuition) +
      Number(epf) +
      Number(ppf) +
      Number(ssy) +
      Number(fd) +
      Number(nsc) +
      Number(pHomeLoan);

    totalB = totalB >= 150000 ? 150000 : totalB;

    const bPlusC = totalB + (Number(nps) >= 50000 ? 50000 : Number(nps));

    // Section 80D Calculations
    const maxSelfHealthIns = ( ageEntered < 60 ? 25000 : 50000 );
    const maxParentsHealthIns = ( Number(parentsAge) < 60 ? 25000 : 50000 );
    const selfHealthInsEntered = ( Number(sIns) > maxSelfHealthIns ? maxSelfHealthIns : Number(sIns) );
    const parentsHealthInsEntered = ( Number(pIns) > maxParentsHealthIns ? maxParentsHealthIns : Number(sIns) );

    const totalDeductions = bPlusC + Number(hra) + Number(edu) + Number(iHomeLoan) + 
    selfHealthInsEntered + parentsHealthInsEntered + Number(iHomeLoan24B) + 
    Number(ev) + Number(sDed) + Number(lta) + Number(others);

    console.log("totalHelathIns considered is: " + selfHealthInsEntered);
    console.log("maxTotalHealthIns considered is: " + parentsHealthInsEntered);
    console.log("Total 80C: " + totalB);
    console.log("Total 80C + NPS: " + bPlusC);
    setGrossTotalB(totalB);
    setTotal80C(bPlusC);
    setTotal80D(selfHealthInsEntered + parentsHealthInsEntered);
    setTotalDed(totalDeductions);
    const totalTaxableAmount = totalIncomeEntered - totalDeductions;
    setNetTaxableIncome(totalTaxableAmount);

    // OLD Regime Calculations
    let oldTaxAmountCalculated = 0;
    if (ageEntered < 60) {    //Non Senior Citizen
      if (totalTaxableAmount > tenLakhs) {
        oldTaxAmountCalculated = ( (percentage( (totalTaxableAmount - tenLakhs), 30 )) + 112500 );
      } else if(totalTaxableAmount > fiveLakhs && totalTaxableAmount <= tenLakhs) {
        oldTaxAmountCalculated = ( (percentage( (totalTaxableAmount - fiveLakhs), 20 )) + 12500 );
      } else if(totalTaxableAmount > twoHalfLakhs && totalTaxableAmount <= fiveLakhs) {
        oldTaxAmountCalculated = ( (percentage( (totalTaxableAmount - twoHalfLakhs), 5 )) );
      } else {
        oldTaxAmountCalculated = 0;
      }
    } else {  // Senior Citizen - Rebate of 12500/- on income till 5L 
      if (totalTaxableAmount > tenLakhs) {
        oldTaxAmountCalculated = ( (percentage( (totalTaxableAmount - tenLakhs), 30 )) + 110000 );
      } else if(totalTaxableAmount > fiveLakhs && totalTaxableAmount <= tenLakhs) {
        oldTaxAmountCalculated = ( (percentage( (totalTaxableAmount - fiveLakhs), 20 )) + 10000 );
      } else {
        oldTaxAmountCalculated = 0;
      }
    }

    const oldTaxPlusCess = oldTaxAmountCalculated + percentage(oldTaxAmountCalculated, 4);

    setOldRegimeTaxAmount(oldTaxPlusCess);

    // NEW Regime Calculations
    let newTaxAmountCalculated = 0;
    if (totalIncomeEntered > fifteenLakhs) {
      newTaxAmountCalculated = ( (percentage( (totalIncomeEntered - fifteenLakhs), 30 )) + 150000 );
    } else if(totalIncomeEntered > 1200000 && totalIncomeEntered <= fifteenLakhs) {
      newTaxAmountCalculated = ( (percentage( (totalIncomeEntered - 1200000), 20 )) + 90000 );
    } else if(totalIncomeEntered > 900000 && totalIncomeEntered <= 1200000) {
      newTaxAmountCalculated = ( (percentage( (totalIncomeEntered - 900000), 15 )) + 45000 );
    } else if(totalIncomeEntered > 600000 && totalIncomeEntered <= 900000) {
      newTaxAmountCalculated = ( (percentage( (totalIncomeEntered - 600000), 10 )) + 15000 );
    } else if(totalIncomeEntered > 300000 && totalIncomeEntered <= 600000) {
      newTaxAmountCalculated = ( (percentage( (totalIncomeEntered - twoHalfLakhs), 5 )) );
    } else {
      newTaxAmountCalculated = (0);
    }

    const newTaxPlusCess = newTaxAmountCalculated + percentage(newTaxAmountCalculated, 4);

    setNewRegimeTaxAmount(newTaxPlusCess);

  };

  return (
    <div className={styles.InputForm} data-testid="InputForm">
      <Form onSubmit={handleFinalSubmit}>
        <FormGroup>
          <Label for="nameID">NAME</Label>
          <Input id="nameID" name="name" onChange={handleInputChange} value={name} />
        </FormGroup>
        <FormGroup>
          <Label for="ageID">AGE</Label>
          <span className="inputValidation">* Mandatory for calculating tax based on your age.</span>
          <Input id="ageID" name="age" onChange={handleInputChange} value={age} required/>
        </FormGroup>
        <FormGroup>
          <Label for="pAgeID">PARENTS AGE</Label>
          <span className="inputValidation">* Mandatory, if you are claiming under section 80D - Health Insurance</span>
          <Input id="pAgeID" name="parentsAge" onChange={handleInputChange} value={parentsAge} />
        </FormGroup>
        <FormGroup>
          <Label for="tIncomeID">TOTAL ANNUAL INCOME (A)</Label>
          <span className="inputValidation">* Total Annual Income field is mandatory.</span>
          <Input id="tIncomeID" name="totalIncome" placeholder="0.00" onChange={handleInputChange} value={totalIncome} required/>
        </FormGroup>
        <br />
        <hr />
        <br />
        <h2>Enter Your Investments</h2>
        <br />
        <h3>UNDER SECTION 80</h3>
        <h3>80C (B)</h3>
        <br />
        <FormGroup>
          <Label for="licID">LIFE INSURANCE PREMIUM</Label>
          <Input id="licID" name="lic" placeholder="0.00" onChange={handleInputChange} value={lic} />
        </FormGroup>
        <FormGroup>
          <Label for="uliID">UNIT LINKED INSURANCE</Label>
          <Input id="uliID" name="uli" placeholder="0.00" onChange={handleInputChange} value={uli} />
        </FormGroup>
        <FormGroup>
          <Label for="elssID">ELSS</Label>
          <Input id="elssID" name="elss" placeholder="0.00" onChange={handleInputChange} value={elss} />
        </FormGroup>
        <FormGroup>
          <Label for="tuitionID">CHILDREN TUITION FEE</Label>
          <Input id="tuitionID" name="tuition" placeholder="0.00" onChange={handleInputChange} value={tuition} />
        </FormGroup>
        <FormGroup>
          <Label for="epfID">EPF / NPS</Label>
          <Input id="epfID" name="epf" placeholder="0.00" onChange={handleInputChange} value={epf} />
        </FormGroup>
        <FormGroup>
          <Label for="ppfID">PPF</Label>
          <Input id="ppfID" name="ppf" placeholder="0.00" onChange={handleInputChange} value={ppf} />
        </FormGroup>
        <FormGroup>
          <Label for="ssyID">CONTRIBUTION TO SSY</Label>
          <Input id="ssyID" name="ssy" placeholder="0.00" onChange={handleInputChange} value={ssy} />
        </FormGroup>
        <FormGroup>
          <Label for="fdID">TAX SAVING FD</Label>
          <Input id="fdID" name="fd" placeholder="0.00" onChange={handleInputChange} value={fd} />
        </FormGroup>
        <FormGroup>
          <Label for="nscID">NSC</Label>
          <Input id="nscID" name="nsc" placeholder="0.00" onChange={handleInputChange} value={nsc} />
        </FormGroup>
        <FormGroup>
          <Label for="pHomeLoanID">PRINCIPAL ON HOME LOAN</Label>
          <Input id="pHomeLoanID" name="pHomeLoan" placeholder="0.00" onChange={handleInputChange} value={pHomeLoan} />
        </FormGroup>     
        <br />   
        <span className="resultKey">GROSS TOTAL 80C (B)</span>
        <span className="resultValue">
        &#8377;{grossTotalB.toLocaleString('en-IN', {maximumFractionDigits:2})}</span>
        <p>* Maximum of 150000/- is considered under section 80C</p>
        <br />
        <br />
        <FormGroup>
          <Label for="npsID">NPS 80CCD(1B)  (C)</Label>
          <p>* Maximum of 50000/- NPS amount is considered under section 80CCD(1B)</p>
          <Input id="npsID" name="nps" placeholder="0.00" onChange={handleInputChange} value={nps} />
        </FormGroup>
        <br />
        <span className="resultKey">NET DEDUCTIONS UNDER SEC 80C (B+C)</span>
        <span className="resultValue">
        &#8377;{total80C.toLocaleString('en-IN', {maximumFractionDigits:2})}</span>      
        <br />
        <br />
        <FormGroup>
          <Label for="hraID">SECTION 80GG HRA  (D)</Label>
          <Input id="hraID" name="hra" placeholder="0.00" onChange={handleInputChange} value={hra} />
        </FormGroup>
        <FormGroup>
          <Label for="eduID">SEC 80E INTEREST ON EDUCATION LOAN  (E)</Label>
          <Input id="eduID" name="edu" placeholder="0.00" onChange={handleInputChange} value={edu} />
        </FormGroup>
        <FormGroup>
          <Label for="iHomeLoanID">SEC 80EEA INTEREST ON HOME LOAN  (F)</Label>
          <Input id="iHomeLoanID" name="iHomeLoan" placeholder="0.00" onChange={handleInputChange} value={iHomeLoan} />
        </FormGroup>
        <br />
        <h3>SECTION 80D (G)</h3>
        <FormGroup>
          <Label for="sInsID">1. HEALTH INSURANCE FOR SELF</Label>
          <Input id="sInsID" name="sIns" placeholder="0.00" onChange={handleInputChange} value={sIns} />
        </FormGroup>
        <FormGroup>
          <Label for="pInsID">2. HEALTH INSURANCE FOR PARENTS</Label>
          <Input id="pInsID" name="pIns" placeholder="0.00" onChange={handleInputChange} value={pIns} />
        </FormGroup>
        <br />
        <span className="resultKey">TOTAL DEDUCTION UNDER 80D  (G)</span>
        <span className="resultValue">
        &#8377;{total80D.toLocaleString('en-IN', {maximumFractionDigits:2})}</span>
        <br />
        <br />
        <FormGroup>
          <Label for="iHomeLoan24BID">SECTION 24B HOME LOAN INTEREST  (H)</Label>
          <Input id="iHomeLoan24BID" name="iHomeLoan24B" placeholder="0.00" onChange={handleInputChange} value={iHomeLoan24B} />
        </FormGroup>
        <FormGroup>
          <Label for="evID">SECTION 80EEB INTEREST ON EV  (I)</Label>
          <Input id="evID" name="ev" placeholder="0.00" onChange={handleInputChange} value={ev} />
        </FormGroup>
        <FormGroup>
          <Label for="sDedID">STANDARD DEDUCTION  (J)</Label>
          <Input id="sDedID" name="sDed" placeholder="0.00" onChange={handleInputChange} value={sDed} />
        </FormGroup>
        <FormGroup>
          <Label for="ltaID">LTA  SECTION 10(5)  (K)</Label>
          <Input id="ltaID" name="lta" placeholder="0.00" onChange={handleInputChange} value={lta} />
        </FormGroup>
        <FormGroup>
          <Label for="othersID">OTHERS  (L)</Label>
          <Input id="othersID" name="others" placeholder="0.00" onChange={handleInputChange} value={others} />
        </FormGroup>        
        <Button color="success" size="lg" type="submit">
          Calculate
        </Button>
        <Button style={{ marginLeft: "1%" }} color="warning" size="lg" type="reset" onClick={resetHandler}>
          Reset
        </Button>
        <br />
        <br />
        <span className="resultKey">TOTAL DEDUCTIONS (M) (B+C+D+E+F+G+H+I+J+K+L)</span>
        <span className="resultValue">
        &#8377;{totalDed.toLocaleString('en-IN', {maximumFractionDigits:2})}</span>
        <br />
        <br />
        <span className="resultKey">NET TAXABLE INCOME  (A-M)</span>
        <span className="resultValue">
        &#8377;{netTaxableIncome.toLocaleString('en-IN', {maximumFractionDigits:2})}</span>
      </Form>
      <br />
      <hr />
      <br />
      <br />
      <h2>TAX PAYABLE AS PER OLD REGIME</h2>
      <h1 className="finalValue">&#8377;{oldRegimeTaxAmount.toLocaleString('en-IN', {maximumFractionDigits:2})}</h1>
      <h2>TAX PAYABLE AS PER NEW REGIME</h2>
      <h1 className="finalValue">&#8377;{newRegimeTaxAmount.toLocaleString('en-IN', {maximumFractionDigits:2})}</h1>
      <div style={{ height: "300px" }}></div>
    </div>
  );
};

export default InputForm;
