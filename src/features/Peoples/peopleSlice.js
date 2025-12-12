import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    // Stan dla Listy Ludzi
    peopleList: [],
    status: "initial",
    page: 1,
    totalPages: 0,
    totalResults: 0,

    // Stan dla Profilu Osoby
    personDetails: null,
    personCredits: null,
    detailsStatus: "initial",
  },
  reducers: {
    // --- LISTA ---
    fetchPopularPeople: (state, { payload: page }) => {
      state.status = "loading";
      state.page = page;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.status = "success";
      state.peopleList = people.results;
      state.totalPages = people.total_pages;
      state.totalResults = people.total_results;
    },
    fetchPopularPeopleError: (state) => {
      state.status = "error";
    },

    // --- PROFIL ---
    fetchPersonDetails: (state) => {
      state.detailsStatus = "loading";
    },
    fetchPersonDetailsSuccess: (state, { payload }) => {
      state.detailsStatus = "success";
      state.personDetails = payload.details;
      state.personCredits = payload.credits;
    },
    fetchPersonDetailsError: (state) => {
      state.detailsStatus = "error";
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeopleList = (state) => selectPeopleState(state).peopleList;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectPage = (state) => selectPeopleState(state).page;

export const selectPersonDetails = (state) => selectPeopleState(state).personDetails;
export const selectPersonCredits = (state) => selectPeopleState(state).personCredits;
export const selectDetailsStatus = (state) => selectPeopleState(state).detailsStatus;

export default peopleSlice.reducer;