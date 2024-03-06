{
    <script>
        jQuery(document).ready(function() {
            $("google-reviews").googlePlaces({
                placeId: '[PLACES_ID]',
                render: ['reviews'],
                min_rating: 5,
                max_rows: 0
            });
    });
    </script>
}