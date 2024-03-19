        const searchParams = new URLSearchParams(window.location.search);

        document.write("long = ");
        document.write(searchParams.get('long'));

        document.write("\n\n");
        document.write("lat = ");
        document.write(searchParams.get('lat'));
