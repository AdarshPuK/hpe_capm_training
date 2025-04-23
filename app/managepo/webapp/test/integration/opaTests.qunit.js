sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpe/ap/managepo/test/integration/FirstJourney',
		'hpe/ap/managepo/test/integration/pages/POsList',
		'hpe/ap/managepo/test/integration/pages/POsObjectPage',
		'hpe/ap/managepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpe/ap/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);