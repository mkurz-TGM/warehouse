package mkurz.warehouse;

import org.springframework.stereotype.Service;

import mkurz.model.WarehouseData;

@Service
public class WarehouseService {
	
	public String getGreetings( String inModule ) {
        return "Greetings from " + inModule;
    }

    public WarehouseData getWarehouseData( String inID ) {

        return new WarehouseSimulation().getData(inID);
        
    }
    
}