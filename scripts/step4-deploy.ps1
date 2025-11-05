Compress-Archive -Path * -DestinationPath travelapp-frontend.zip -Force
az webapp deploy `
    --src-path travelapp-frontend.zip `
    --resource-group $global:RESOURCE_GROUP `
    --name $global:APPSERVICE_APPNAME
