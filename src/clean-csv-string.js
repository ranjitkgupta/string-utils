export function cleanCsvString(csvString) {
    if (csvString != null) {
      return csvString
        ?.replace(/\s/g, '') // Remove blank spaces
        ?.replace(/,+/g, ',') // Remove any multiple occurences of commas
        ?.replace(/^,|,$/g, '') // Remove first and last comma
        ?.replace(/,/g, ', ') // Add space after every comma
    }
  }