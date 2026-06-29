import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTemplate: 1,

  personalInfo: {
    profileImage: "",

    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },

  workExperience: {
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  },

  education: {
    college: "",
    degree: "",
    specialization: "",
    cgpa: "",
    location: "",
    passingYear: "",
  },

  skills: {
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,

  reducers: {
    savePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },

    saveWorkExperience: (state, action) => {
      state.workExperience = action.payload;
    },

    saveEducation: (state, action) => {
      state.education = action.payload;
    },

    saveSkills: (state, action) => {
      state.skills = action.payload;
    },

    setTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },

    clearResume: (state) => {
      state.selectedTemplate = 1;

      state.personalInfo = {
        profileImage: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        objective: "",
      };

      state.workExperience = {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        description: "",
      };

      state.education = {
        college: "",
        degree: "",
        specialization: "",
        cgpa: "",
        location: "",
        passingYear: "",
      };

      state.skills = {
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
      };
    },
  },
});

export const {
  savePersonalInfo,
  saveWorkExperience,
  saveEducation,
  saveSkills,
  setTemplate,
  clearResume,
} = resumeSlice.actions;

export default resumeSlice.reducer;