// This file contains your Data Connector logic
section power_bi_connector;

[DataSource.Kind="power_bi_connector", Publish="power_bi_connector.Publish"]
shared power_bi_connector.Contents = (optional message as text) =>
    let
        _message = if (message <> null) then message else "(no message)",
        a = "Hello from power_bi_connector: " & _message
    in
        a;

// Data Source Kind description
power_bi_connector = [
    Authentication = [
        // Key = [],
        // UsernamePassword = [],
        // Windows = [],
        Implicit = []
    ],
    Label = Extension.LoadString("DataSourceLabel")
];

// Data Source UI publishing description
power_bi_connector.Publish = [
    Beta = true,
    Category = "Other",
    ButtonText = { Extension.LoadString("ButtonTitle"), Extension.LoadString("ButtonHelp") },
    LearnMoreUrl = "https://powerbi.microsoft.com/",
    SourceImage = power_bi_connector.Icons,
    SourceTypeImage = power_bi_connector.Icons
];

power_bi_connector.Icons = [
    Icon16 = { Extension.Contents("power_bi_connector16.png"), Extension.Contents("power_bi_connector20.png"), Extension.Contents("power_bi_connector24.png"), Extension.Contents("power_bi_connector32.png") },
    Icon32 = { Extension.Contents("power_bi_connector32.png"), Extension.Contents("power_bi_connector40.png"), Extension.Contents("power_bi_connector48.png"), Extension.Contents("power_bi_connector64.png") }
];
