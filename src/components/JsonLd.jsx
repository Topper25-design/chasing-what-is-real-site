import React from 'react'

const JsonLd = ({ data }) => {
  if (!data) return null

  const json = Array.isArray(data) ? data : [data]

  return json.map((schema, index) => (
    <script
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ))
}

export default JsonLd

