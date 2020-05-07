import React from 'react';

import text from '../dummy_text';

import MainPageContainer from '../containers/main_page_container'
import ForPatientsPage from '../pages/for_patients_page'
import MediaPage from '../pages/media_page'
import AboutPage from '../pages/about_page'
import ContactPage from '../pages/contact_page'

const components = {
  violetapopovmd: MainPageContainer,
  forpatients: ForPatientsPage,
  about: AboutPage,
  contact: ContactPage,
  media: MediaPage
}

export function retrieveContent() {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'RETRIEVE_CONTENT',
 payload: text
 }
}

export function displayPage(target) {
  const TargetPage = components[target]
  return {
    type: 'DISPLAY_PAGE',
    payload: <TargetPage />
  }
}
