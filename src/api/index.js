import Axios from "../axios";

export function USER_REQUEST() {
  return Axios.post("/user");
}

export function USER_DELETE_PROFILE() {
  return Axios.delete("profile/delete-profile");
}

export function USER_CHOICE_ROLE(
  firstName,
  lastName,
  city,
  role,
  citizenship,
  pid
) {
  // TODO: ПОДПРАВИТЬ СОХРАНЕНИЕ БЭКА
  return Axios.post("/user-choice-role", {
    firstName,
    lastName,
    city,
    role,
    pid,
    citizenship,
  });
}

export function AUTH_SEND_CODE(phone) {
  return Axios.post("/send-code", {
    phone,
  });
}

export function AUTH_REQUEST(code, phone) {
  return Axios.post("/auth", {
    code,
    phone,
  });
}

export function AUTH_LOGOUT() {
  return Axios.post("/logout");
}

export function AUTH_CONFIRMATION() {
  return Axios.post("/profile/confirmation");
}

export function GET_CITIES() {
  return Axios.get("/options/cities/all")
    .then((response) => response.data)
    .then((response) => response.options);
}

export function GET_BALANCE_DETAILS() {
  return Axios.get("/balance-histories")
    .then((response) => response.data)
    .then((response) => response.histories);
}

export function GET_PAGE_POLICY() {
  return Axios.get("/pages/policy");
}

export function GET_PAGE_SECURITY() {
  return Axios.get("/pages/security");
}

export function STORE_USER_PROFILE(formData) {
  return Axios.put("/store-profile", formData);
}

export function UPDATE_PROFILE_ITEMS(data) {
  return Axios.put("profile/update-profile-items", data);
}

export function CHOICE_CITIZENSHIP_AND_PROFESSION(data) {
  return Axios.put("profile/choice-citizenship-and-professions", data);
}

export function CHOICE_CITIZENSHIP(data) {
  return Axios.put("profile/choice-citizenship", data);
}

export function CHOICE_PROFESSIONS(data) {
  return Axios.put("profile/choice-professions", data);
}

export function BIND_REFERRER(data) {
  return Axios.put("profile/bind-referrer", data);
}
export function UPLOAD_PROFILE_DOCS(data) {
  return Axios.put("profile/upload-profile-docs", data);
}

export function GET_ORDERS() {
  return Axios.get("/shifts/list");
}

export function GET_ORDERS_NOT_AUTH(id = 1) {
  return Axios.get(`shifts/not-auth-list?cityId=${id}`);
}

export function GET_MY_ORDERS() {
  return Axios.get("/shifts/my/list");
}

export function GET_SHIFT_NO_AUTH(id) {
  return Axios.get(`shifts/${id}/not-auth-show`).then(
    (response) => response.data
  );
}

export function GET_SHIFT(id) {
  return Axios.get(`/shifts/${id}/edit`).then((response) => response.data);
}

export function GET_MY_SHIFT(id) {
  return Axios.get(`/shifts/my/${id}/edit`).then((response) => response.data);
}

export function GET_INN() {
  return Axios.get("/profile/inn-verification-status");
}

export function CHECK_INN(formData) {
  return Axios.put("/profile/verify-inn", formData).then(
    (response) => response.data
  );
}

export function VERIFY_INN(inn) {
  const data = {
    inn,
  };

  return Axios.post("/bot/verify-inn", data).then((response) => response.data);
}

export function CHECK_PASSPORT_DATA(data) {
  return Axios.post("/bot/get-inn-by-info", data).then(
    (response) => response.data
  );
}

export function CHECK_FNS() {
  return Axios.post("/bot/get-taxpayer-status-by-phone").then(
    (response) => response.data
  );
}

export function CREATE_SBER_ORDER(inn) {
  const data = {
    inn,
  };

  return Axios.post("/bot/create-sber-order", data).then(
    (response) => response.data
  );
}

export function STORE_BOT_ANSWERS(log) {
  const data = {
    log,
  };

  return Axios.post("/bot/store-log", data).then((response) => response.data);
}

export function CONNECT_TO_PLATFORM() {
  return Axios.put("/profile/connect-to-platform").then(
    (response) => response.data
  );
}

export function BECOME_EMPLOYEE(shiftID) {
  return Axios.put(`/shifts/${shiftID}/enter`).then((response) => {
    return {
      ...response.data,
      resStatus: response.status,
    };
  });
}
export function TO_RESERVE(shiftID) {
  return Axios.put(`/shifts/${shiftID}/to-reserve`).then(
    (response) => response.data
  );
}

export function REJECT_EMPLOYING(shiftID) {
  return Axios.put(`/shifts/${shiftID}/cancel`).then(
    (response) => response.data
  );
}

export function CONFIRM_EMPLOYING(shiftID) {
  return Axios.put(`/shifts/${shiftID}/confirm`).then(
    (response) => response.data
  );
}

export function START_WORKING(shiftID) {
  return Axios.put(`/shifts/${shiftID}/start-work`).then(
    (response) => response.data
  );
}

export function DONE_WORKING(shiftID) {
  return Axios.put(`/shifts/${shiftID}/end-work`).then(
    (response) => response.data
  );
}

export function GET_ADVERTISEMENTS(params) {
  return Axios.get("/advertisements/list", {
    params,
  });
}

export function GET_ADVERTISE(id) {
  return Axios.get(`/advertisements/${id}/edit`).then(
    (response) => response.data
  );
}

export function APPLY_ADVERTISE(id) {
  return Axios.post(`/advertisements/${id}/apply`).then(
    (response) => response.data
  );
}

export function GET_NEWS_LIST() {
  return Axios.get("/news")
    .then((response) => response.data)
    .then((response) => response.items);
}

export function GET_NEWS(id) {
  return Axios.get(`/news/${id}`)
    .then((response) => response.data)
    .then((response) => response.item);
}

export function GET_INSTRUCTIONS_LIST() {
  return Axios.get("/instructions")
    .then((response) => response.data)
    .then((response) => response.items);
}

export function GET_INSTRUCTION(id) {
  return Axios.get(`/instructions/${id}`)
    .then((response) => response.data)
    .then((response) => response.item);
}

export function GET_NOTIFICATIONS_LIST() {
  return Axios.get("/notifications")
    .then((response) => response.data)
    .then((response) => response.items);
}

export function CREATE_BILL(amount) {
  return Axios.put("/profile/create-bill", {
    amount,
  }).then((response) => response.data);
}

export function CREATE_ORDER() {
  return Axios.get("orders/create").then((response) => response.data);
}

export function STORE_ORDER(payload) {
  return Axios.post("orders", payload).then((response) => response.data);
}

export function SHOW_ORDER(id) {
  return Axios.get(`orders/${id}/show`).then((response) => response.data);
}

export function CANCEL_ORDER(id) {
  return Axios.put(`orders/${id}/cancel`).then((response) => response.data);
}

export function START_ORDER_WORK(id) {
  return Axios.put(`orders/${id}/start-work`).then((response) => response.data);
}

export function END_ORDER_WORK(id) {
  return Axios.put(`orders/${id}/end-work`).then((response) => response.data);
}

export function CHANGE_PRICE_ORDER(id, changeAmount) {
  return Axios.put(`orders/${id}/change-price`, {
    changeAmount,
  }).then((response) => response.data);
}

export function SHOW_ORDERS() {
  return Axios.get(`orders/archive`).then((response) => response.data);
}

export function CLOSE_ORDER_WORK(id) {
  return Axios.put(`orders/${id}/close-work`).then((response) => response.data);
}

export function REPORT_ERROR(payload) {
  return Axios.post("report-error", payload).then((response) => response.data);
}

export function OFFER_PRICE(id, offeredPrice) {
  return Axios.put(`shifts/${id}/offer-price`, {
    offeredPrice,
  }).then((response) => response.data);
}

export function SEARCH_CITIES(value) {
  return Axios.get("options/cities", {
    params: {
      value: value,
    },
  }).then((response) => response.data);
}

export function NOTIFICATIONS_CONFIRM(id) {
  return Axios.put(`notifications/${id}/confirm`);
}

export function CONFIRM_EVENTS(events) {
  return Axios.put(`user/events/confirm`, {
    events,
  });
}

export function CREATE_EVENT(event) {
  return Axios.post(`user/events/create`, {
    alias: event,
  });
}

export function APP_ACTION(actionId, payload) {
  return Axios.put(`user/action`, {
    actionId: actionId,
    payload: payload,
  });
}

export function TESTS() {
  return Axios.get(`tests`).then((response) => response.data);
}

export function TEST_BLOCKS(id) {
  return Axios.get(`tests/${id}`).then((response) => response.data);
}

export function SAVE_TEST_ANSWERS(testId, block, blockId) {
  return Axios.post(`tests/${testId}/blocks/${blockId}`, block).then(
    (response) => response.data
  );
}

export function GET_CONTRACT(id) {
  return Axios.post(`shifts/${id}/get-contract`).then(
    (response) => response.data
  );
}

export function GET_ALL_CONTRACTS() {
  return Axios.get(`profile/contracts`).then((response) => response.data);
}

export function GET_DOCUMENT_CONTRACT(id) {
  return Axios.get(`profile/contracts/${id}`).then((response) => response.data);
}

export function SIGN_CONTRACT(id) {
  return Axios.put(`profile/contracts/${id}/sign`).then(
    (response) => response.data
  );
}

export function SEND_SMS_CODE_CONTRACT(id) {
  return Axios.put(`profile/contracts/${id}/send-sms-code`).then(
    (response) => response.data
  );
}

export function CANCEL_CONTRACT(id) {
  return Axios.delete(`profile/contracts/${id}/cancel`).then(
    (response) => response.data
  );
}
