import ReactGA from 'react-ga4'

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (typeof window !== 'undefined' && measurementId) {
    ReactGA.initialize(measurementId)
  }
}

// Track page views
export const trackPageView = (path) => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: path })
  }
}

// Track custom events
export const trackEvent = (category, action, label, value) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
  }
}

