import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../services/HttpClient";
import { ResultService } from "../../services/ResultService";
import Swal from "sweetalert2";

export const ResultUser = () => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const questionService = new ResultService(httpClient);
      const res = await questionService.resultAuth();
      if (res.message === "No esta autorizado.") {
        Swal.fire({
          icon: "error",
          title: "Oops... Algo salio mal",
          text: `${res.message}`,
        });

        return res;
      }

      return res;
    } catch (error) {}
  };
};
