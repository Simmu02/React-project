import logo from "./logo.svg";
import "./App.css";
import cake from "./cake.png";
import { balance, tiers, timeframe } from "./Utils/constants";
import Chips from "./Components/Chips/chips";
import pencil from "./pencil.png";
import dropdown from "./dropdown.png";
import cross from "./icon.png";
import { useState } from "react";
import { Switch } from "./Components/Switch/switch";
import Button from "./Components/Button/button";

function App() {
  const [activeBalance, setActiveBalance] = useState(balance[0]); // default value to be the first value
  const [activeTimeFrame, setActiveTimeFrame] = useState(timeframe[0]);
  const [activeTier, setActiveTier] = useState(tiers[0]);
  const [activeField, enableTxtFieldActive] = useState(false);
  const [showDropDown, isShowDropDown] = useState(true);
  const [btnLabel, setBtnLabel] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [toatlInterest, calculateTotalInterest] = useState();
  const [isOn, checkIsOn] = useState(true);
  const balanceAmount = 20.82;

  var btnText = "Show detail";

  const updateBalance = (value) => {
    setActiveBalance(value);
  };
  const updateTimeFrame = (value) => {
    setActiveTimeFrame(value);
  };
  const updateTier = (value) => {
    setActiveTier(value);
  };
  const activeTxtField = () => {
    enableTxtFieldActive(false);
    console.log(activeField);
  };
  const checkSwitchState = (msg) => {
    checkIsOn(msg);
  };
  // const getTotalAmount = ()=>{
  //   setTotalAmount(activeBalance * activeTimeFrame)
  //   console.log(totalAmount)

  // }

  const dispDropDown = () => {
    isShowDropDown(!showDropDown);
    console.log(showDropDown);
  };

  const changeBtnLabel = () => {
    if (btnLabel == true) {
      btnText = "Hide details";
      setBtnLabel(false);
    } else {
      btnText = "Show details";
      setBtnLabel(true);
    }
  };

  const updateActiveBalance = (e) => {
    console.log("vakue", e.target.value);

    setActiveBalance(e.target.value);
  };

  const btnClicked = () => {
    var tf = activeTimeFrame[0];
    var t = activeTier[5];
    var val = activeBalance.split("$")[1];
    console.log(tf, t, val[1]);
    var result = (parseInt(val) * parseInt(tf) * (parseInt(t) * 5)) / 100;
    console.log(result);
    calculateTotalInterest(result);
    // alert("i am clicked")
  };

  return (
    <div id="wrapper">
      <div id="headingContainer">
        <h1 id="heading">Calculator</h1>
        <img src={cross} id="crossBtn" />
      </div>

      <div id="textContainer">
        <img src={cake} alt="cross" id="cakeImage" />
        <h5 id="cake">Cake</h5>
        <Switch sizeOfSwitch={"small"} checkSwitchState={checkSwitchState} />

        <h5 id="usd">USD</h5>
      </div>
      <input
        type="text"
        id="textField"
        value={
          isOn
            ? "Cake" + activeBalance === "Use Balance"
              ? balanceAmount
              : activeBalance.split("$")[1]
            : "$" + activeBalance === "Use Balance"
            ? balanceAmount
            : activeBalance.split("$")[1]
        }
        onChange={updateActiveBalance}
      />

      <div id="balanceContainer">
        <div id="balanceChipContainer">
          {balance.map((text, position) => {
            return (
              <Chips
                text={text}
                key={position}
                isSelected={text === activeBalance}
                onButtonClick={updateBalance}
              />
            );
          })}
        </div>
        <span id="approximateBalance">~$20.82</span>
      </div>
      <small id="timeFrameText">Timeframe</small>
      <div className="timeFrameContainer">
        <div className="timeFrame">
          {timeframe.map((text, position) => {
            return (
              <Chips
                text={text}
                key={position}
                isSelected={text === activeTimeFrame}
                onButtonClick={updateTimeFrame}
              />
            );
          })}
        </div>
      </div>
      <div id="enableAccelerationAPYContainer">
        <small id="enableAcceleratedAPY">Enable Accelerated APY</small>
        <Switch sizeOfSwitch={"large"} />
      </div>
      <small id="selectTier">Select Tier</small>
      <div id="tierContainer">
        {tiers.map((text, position) => {
          return (
            <Chips
              text={text}
              key={position}
              isSelected={text === activeTier}
              onButtonClick={updateTier}
            />
          );
        })}
      </div>
      <small id="roiCurrentRate">ROI at current rate</small>

      <div id="inputContainer">
        <button onClick={activeTxtField} id="pencilBtn">
          <img src={pencil} id="pencilIcon" />
        </button>

        <input
          type="text"
          value={toatlInterest}
          id="roiRateTextField"
          disabled={activeField}
        />
      </div>

      <small id="approximateRate">~ 3CAKE + 10 DON</small>
      <div id="buttonContainer">
        <Button variant={"contained"} onButtonClick={btnClicked} />
        <Button />
      </div>
      <div className="showDetailsContainer">
        <button onClick={dispDropDown} id="dropDownBtn">
          <a id="showDetails">Show details</a>
          <img src={dropdown} id="dropdownImg" />
        </button>

        <div className={`dropdownContent ${showDropDown ? "dropDownTxt" : ""}`}>
          <div id="apyTxt">
            <small id="apy">APY</small>
            <small id="percentage">63.34%</small>
          </div>
          <div id="detailList">
            <ul>
              <li>Calculated based on current rates</li>
              <li>
                All fugures are estimates provided for your convenience only,
                and by no means represent guaranted returns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
