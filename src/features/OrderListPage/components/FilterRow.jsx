import { useContext } from "react";
import classnames from "classnames";

import { SpanType } from "../../../shared/components/Span";
import { IconType } from "../../../shared/components/Icon";
import { StyledButton, ButtonType } from "../../../shared/components/Button";
import { Input, InputType } from "../../../shared/components/Input";

import { FilterDropdown } from "./FilterDropdown";

import { OrderListPageContext, VisibilityType } from "../OrderListPage";
import locale from "../OrderListPage.locale";
import styles from "./FilterRow.module.css";

const filterRowFirst = Object.create(InputType.filterRow);
filterRowFirst.id = "date";
filterRowFirst.type = "data";
filterRowFirst.placeholder = locale.filterRowFirstPlaceholder;
filterRowFirst.defaultValue = locale.filterRowFirstDefaultValue;

const filterRowSecond = Object.create(InputType.filterRow);
filterRowSecond.type = "data";
filterRowSecond.placeholder = locale.filterRowSecondPlaceholder;
filterRowSecond.button.className = ButtonType.disabled;

const filterRowThird = Object.create(InputType.filterRow);
filterRowThird.id = "sum";
filterRowThird.type = "text";
filterRowThird.defaultValue = locale.filterRowThirdDefaultValue;

const filterRowFourth = Object.create(InputType.filterRow);
filterRowFourth.type = "text";
filterRowFourth.placeholder = locale.filterRowFourthPlaceholder;
filterRowFourth.button.className = ButtonType.disabled;

const filterRowFifth = Object.create(InputType.filterRow);
filterRowFifth.id = "status";
filterRowFifth.type = "text";
filterRowFifth.placeholder = locale.filterRowFifthPlaceholder;
filterRowFifth.button.className = ButtonType.disabled;

export const FilterRow = () => {
  const { filterState, onFilterDropdownState, filterDropdownValue } =
    useContext(OrderListPageContext);

  let className = null;
  switch (filterState) {
    case VisibilityType.hide:
      className = classnames(styles._, styles.disabled);
      break;
    case VisibilityType.show:
      className = styles._;
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <div className={styles.filterRowForm}>
        <div className={styles.filterRowInputs}>
          <label
            htmlFor={filterRowFirst.id}
            className={styles.filterRowInputTitleText}
          >
            {locale.filterRowInputTitles[0]}
          </label>
          <div className={styles.filterRowInputsWrap}>
            <Input
              className={styles.filterRowInputWrap}
              type={filterRowFirst}
              leftText={locale.filterRowFirstLeftText}
              iconType={IconType.x_medium}
            ></Input>
            <Input
              className={styles.filterRowInputWrap}
              type={filterRowSecond}
              leftText={locale.filterRowSecondLeftText}
            ></Input>
          </div>
        </div>
        <div className={styles.filterRowInputs}>
          <label
            htmlFor={filterRowFifth.id}
            className={styles.filterRowInputTitleText}
          >
            {locale.filterRowInputTitles[1]}
          </label>
          <div className={styles.filterRowInputsWrap}>
            <Input
              className={styles.filterRowInputWrap}
              type={filterRowFifth}
              iconType={IconType.v_arrow}
              onClick={onFilterDropdownState}
              onInputClick={onFilterDropdownState}
              value={filterDropdownValue}
              readOnly={true}
            />
            <FilterDropdown />
          </div>
        </div>
        <div className={styles.filterRowInputs}>
          <label
            htmlFor={filterRowThird.id}
            className={styles.filterRowInputTitleText}
          >
            {locale.filterRowInputTitles[2]}
          </label>
          <div className={styles.filterRowInputsWrap}>
            <Input
              className={styles.filterRowInputWrap}
              type={filterRowThird}
              leftText={locale.filterRowSecondLeftText}
              iconType={IconType.x_medium}
            ></Input>
            <Input
              className={styles.filterRowInputWrap}
              type={filterRowFourth}
              leftText={locale.filterRowThirdLeftText}
            ></Input>
          </div>
        </div>
        <StyledButton
          className={styles.filterRowFormButton}
          buttonClassName={styles.filterRowButton}
          spanType={SpanType.filterRowTextAccept}
          text={locale.filterRowTextButton}
        />
      </div>
    </div>
  );
};
