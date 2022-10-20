import { getApiUrl } from "../Utils/Config/getApiUrl";
import { Authentication } from "./Authentication";

export const Exam = {
  async generate({ length, type, quickstart }) {
    return window.fetch(`${getApiUrl()}/api/exam/generate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Authentication.getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        length: length ?? 10,
        quickstart,
        type,
      }),
    });
  },

  async getAllExamOfUser() {
    return window.fetch(`${getApiUrl()}/api/exam/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Authentication.getAccessToken()}`,
      },
    });
  },

  async getInfoExam(examId) {
    return window.fetch(`${getApiUrl()}/api/exam/${examId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Authentication.getAccessToken()}`,
      },
    });
  },

  async getQuestion({ examId, questionId }) {
    return window.fetch(`${getApiUrl()}/api/exam/${examId}/${questionId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Authentication.getAccessToken()}`,
      },
    });
  },
};
