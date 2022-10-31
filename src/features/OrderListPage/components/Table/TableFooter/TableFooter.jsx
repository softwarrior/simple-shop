import { TableFooterDropdown } from "../TableFooterDropdown/TableFooterDropdown";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../../shared/components";

import styles from "./TableFooter.module.css";

export const TableFooter = () => {
  return (
    <div className={styles._}>
      <div className={styles.tableFooterButtonsStatus}>
        <div className={styles.tableFooterAction}>
          <span className={styles.tableFooterText}>Выбрано записей: 5</span>
          <Button
            className={styles.tableFooterButton}
            buttonStyle={ButtonStyle.primary}
            buttonSize={ButtonSize.small}
            iconType={IconType.pencil}
            isAlign={true}
            onClick={() => {}}
          >
            Изменить статус
          </Button>
          <Button
            buttonStyle={ButtonStyle.danger}
            buttonSize={ButtonSize.small}
            iconType={IconType.bin}
            isAlign={true}
            onClick={() => {}}
          >
            Удалить
          </Button>
        </div>
        <TableFooterDropdown />
      </div>
      <div className={styles.tableFooterPagination}>
        <div className={styles.tableFooterPaginationForm}>
          <Button
            buttonStyle={ButtonStyle.primary}
            buttonSize={ButtonSize.small}
            isAlign={true}
            onClick={() => {}}
          >
            1
          </Button>
          {[2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              buttonStyle={ButtonStyle.reverse}
              buttonSize={ButtonSize.small}
              isAlign={true}
              onClick={() => {}}
            >
              {num}
            </Button>
          ))}
          <Button
            buttonStyle={ButtonStyle.reverse}
            buttonSize={ButtonSize.small}
            isAlign={true}
            disabled={true}
            onClick={() => {}}
          >
            ...
          </Button>
          <Button
            buttonStyle={ButtonStyle.reverse}
            buttonSize={ButtonSize.small}
            isAlign={true}
            onClick={() => {}}
          >
            100
          </Button>
        </div>
        <Button
          buttonStyle={ButtonStyle.reverse}
          buttonSize={ButtonSize.small}
          isAlign={true}
          onClick={() => {}}
        >
          #
        </Button>
      </div>
    </div>
  );
};
