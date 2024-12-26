import Swal from "sweetalert2";

export enum SweetIcon {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  QUESTION = "question",
}
export enum SweetPosition {
  TopStart = "top-start",
  Center = "center",
  BottomEnd = "bottom-end",
}

export const notify = (msg: string, icon: SweetIcon, position: SweetPosition) =>
  Swal.fire({
    title: "Notification!",
    text: msg,
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
    position: position,
  });
