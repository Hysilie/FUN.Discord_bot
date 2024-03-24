const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('./src/events');
        for (const folder of eventFolders) {
            const eventsFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter(file => file.endsWith('.js'));
            
            console.log("Events Files: ", eventsFiles)
           
            switch (folder) {
                case "client":
                    for (const file of eventsFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        console.log("Event: ", event)
                        if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
                        else {
                            console.log("Running event: ", event.name)
                            client.on(event.name, (...args) => event.execute(...args, client))
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
}