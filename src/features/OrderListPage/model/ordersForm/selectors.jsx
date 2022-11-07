import { createSelector } from "reselect";

export const getForm = (state) => state.ordersForm;

export const getCustomer = createSelector(getForm, (form) => form.customer);
