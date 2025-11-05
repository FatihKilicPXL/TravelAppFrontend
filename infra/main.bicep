param location string = 'westeurope'

module frontendApp 'app.bicep' = {
  name: 'frontendAppModule'
  params: {
    location: location
    frontendAppName: 'travelapp-frontend'
  }
}

output frontendAppName string = frontendApp.outputs.appServiceAppName
