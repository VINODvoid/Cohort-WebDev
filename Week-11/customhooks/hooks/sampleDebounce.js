let clock;
function searchBackend()
{
    console.log("Product is searched");
}

function debounceSearchBackend()
{
    clearTimeout(clock);
    clock = setTimeout(searchBackend,20);
}


debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();



// so basically debouncing means waiting for certain timer to run out then main function is called but as multiple call are made to same function , timer is restarts  and at last lastCall is finally made.
