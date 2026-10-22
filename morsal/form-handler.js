// ═══════════════════════════════════════════════════════════════
// FORMULIER HANDLER - Gratis Proefles Inschrijving
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('proeflesForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Haal formulier data op
            const formData = {
                voornaam: document.getElementById('voornaam').value,
                achternaam: document.getElementById('achternaam').value,
                email: document.getElementById('email').value,
                telefoon: document.getElementById('telefoon').value,
                lestype: document.getElementById('lestype').value,
                opmerking: document.getElementById('opmerking').value
            };
            
            // Toon loading state
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
            submitBtn.disabled = true;
            
            // OPTIE 1: EMAIL VERSTUREN VIA MAILTO (EENVOUDIG MAAR BEPERKT)
            // Uncomment onderstaande regels om mailto te gebruiken:
            /*
            const mailtoLink = `mailto:info@ride2go.nl?subject=Gratis Proefles Aanmelding - ${formData.voornaam} ${formData.achternaam}&body=
Nieuwe aanmelding voor gratis proefles:%0D%0A%0D%0A
Naam: ${formData.voornaam} ${formData.achternaam}%0D%0A
Email: ${formData.email}%0D%0A
Telefoon: ${formData.telefoon}%0D%0A
Lestype: ${formData.lestype}%0D%0A
Opmerking: ${formData.opmerking}`;
            
            window.location.href = mailtoLink;
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();
            alert('Je email programma wordt geopend. Verstuur de email om je aanmelding te voltooien!');
            */
            
            // OPTIE 2: FORMSPREE (GRATIS TOT 50 SUBMISSIONS/MAAND)
            // 1. Ga naar https://formspree.io
            // 2. Maak een gratis account
            // 3. Verkrijg je form endpoint
            // 4. Vervang 'YOUR_FORM_ID' hieronder met je eigen ID
            /*
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Verzonden!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                    alert('Bedankt voor je aanmelding! We nemen binnen 24 uur contact met je op.');
                }, 2000);
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                alert('Er is iets misgegaan. Probeer het opnieuw of bel ons op 06 54 29 37 62');
            });
            */
            
            // OPTIE 3: WHATSAPP (DIRECT NAAR WHATSAPP)
            // Uncomment onderstaande regels om via WhatsApp te versturen:
            
            const whatsappMessage = `*Nieuwe Aanmelding*%0A%0A` +
                `• Naam: ${formData.voornaam} ${formData.achternaam}%0A` +
                `• Email: ${formData.email}%0A` +
                `• Telefoon: ${formData.telefoon}%0A` +
                `• Lestype: ${formData.lestype}%0A` +
                `• Opmerking: ${formData.opmerking || 'Geen opmerking'}`;
            
            const whatsappLink = `https://wa.me/31645040790?text=${whatsappMessage}`;

            // Open WhatsApp direct binnen de user-gesture, anders blokkeert Safari de pop-up
            const whatsappWindow = window.open(whatsappLink, '_blank');

            // Val terug op navigatie in hetzelfde tabblad als de pop-up toch geblokkeerd wordt
            if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
                window.location.href = whatsappLink;
            }

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();
            
            
            // OPTIE 4: NETLIFY FORMS (ALS JE WEBSITE OP NETLIFY STAAT)
            // Voeg simpelweg 'data-netlify="true"' toe aan de <form> tag in HTML
            // Geen JavaScript nodig, werkt automatisch!
            
            // OPTIE 5: GOOGLE FORMS
            // Embed een Google Form in plaats van dit custom formulier
            
            // OPTIE 6: EIGEN BACKEND
            // Als je een eigen server hebt, maak een API endpoint en gebruik fetch:
            /*
            fetch('https://jouw-server.nl/api/proefles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                // Success handling
            });
            */
        });
    }
});
