# Warehouse 1

## WarehouseSimulation

Erstellt ein neues zufaelliges Warehouse.

```java
public WarehouseData getData( String inID ) {
		
		String[][] cities = {
			{"Wuernitz", "2112", "Robert Stolz Gasse 1", "Wuernitz Lager", "Österreich"},
			{"Salzburg", "5020", "Hauptstraße 5", "Salzburg Lager", "Österreich"},
			{"Wien", "1010", "Bruno Kreisky Platz 1", "Wien Lager", "Österreich"}
		};

		int r = this.getRandomInt(0,2);

		WarehouseData data = new WarehouseData();
		data.setID(inID);
		data.setName(cities[r][3]);
		data.setStreet(cities[r][2]);
		data.setPlz(cities[r][1]);
		data.setCity(cities[r][0]);
		data.setCountry(cities[r][4]);

		return data;
		
	}
```

## WarehouseController

Zeigt die verschiedenen Darstellungen

```java
public String warehouseMain() {
    	return  "This is the warehouse application! (DEZSYS_WAREHOUSE_REST) <br/><br/>" +
                          "<a href='http://localhost:8080/warehouse/001/data'>Link to warehouse/001/data</a><br/>" +
                          "<a href='http://localhost:8080/warehouse/001/xml'>Link to warehouse/001/xml</a><br/>" +
                          "<a href='http://localhost:8080/warehouse/001/transfer'>Link to warehouse/001/transfer</a><br/>";
    }

    @RequestMapping(value="/warehouse/{inID}/data", produces = MediaType.APPLICATION_JSON_VALUE)
    public WarehouseData warehouseData( @PathVariable String inID ) {
        return service.getWarehouseData( inID );
    }

    @RequestMapping(value="/warehouse/{inID}/xml", produces = MediaType.APPLICATION_XML_VALUE)
    public WarehouseData warehouseDataXML( @PathVariable String inID ) {
        return service.getWarehouseData( inID );
    }

    @RequestMapping("/warehouse/{inID}/transfer")
    public String warehouseTransfer( @PathVariable String inID ) {
        return service.getGreetings("Warehouse.Transfer!");
    }
```

## WarehouseData

Erstelt eine Zufaellige Anzahl an Produkten und einen Timestamp.

```java
public WarehouseData() {
		int r = new Random().nextInt(6) + 4;
		productData = new ArrayList<Product>(r);

		for(int i = 0; i < r; i++) {
			productData.add(new Product());
		}
		this.timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").format(new Date());
	}
```

## Product

Erstellt ein Random Produkt von einer Vorlage.
```java
public Product() {
        String[][] products = {
            {"Zahnpasta", "Hygiene", "80g"},
            {"Apfelsaft", "Getränk", "1l"},
            {"Salami", "Nahrung", "150g"},
            {"Shampoo", "Hygiene", "250ml"},
            {"Orangensaft", "Getränk", "500ml"},
            {"Vollkornbrot", "Nahrung", "500g"},
            {"Zahnbürste", "Hygiene", "1 Stück"},
            {"Mineralwasser", "Getränk", "1.5l"},
            {"Joghurt", "Nahrung", "200g"},
            {"Handseife", "Hygiene", "150ml"},
            {"Cola", "Getränk", "2l"},
            {"Hähnchenbrust", "Nahrung", "300g"},
            {"Duschgel", "Hygiene", "200ml"}
        };

        String r = String.valueOf(new Random().nextInt(1000000, 9999999));
        this.id = r.substring(0, 2) + "-" + r.substring(2, r.length() - 1);
        
        int rInt = new Random().nextInt(10);
        this.name = products[rInt][0];
        this.category = products[rInt][1];
        this.amount = String.valueOf(new Random().nextInt(5000));
        this.unit = products[rInt][2];
    }
```
