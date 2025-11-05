param location string
param frontendAppName string

var planName = '${frontendAppName}-plan'

resource plan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: planName
  location: location
  sku: {
    name: 'F1'
    tier: 'Free'
  }
}

resource app 'Microsoft.Web/sites@2022-09-01' = {
  name: frontendAppName
  location: location
  properties: {
    serverFarmId: plan.id
    httpsOnly: true
  }
}

output appServiceAppName string = app.name
