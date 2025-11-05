$result = az deployment group create `
  --template-file ..\\infra.\\main.bicep `
  --resource-group $global:RESOURCE_GROUP `
  --parameters location=$global:LOCATION | ConvertFrom-Json

$global:APPSERVICE_APPNAME = $result.properties.outputs.frontendAppName.value

