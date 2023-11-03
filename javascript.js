<!DOCTYPE html>
<html>
<head>
    <title>Exemple JavaScript</title>
</head>
<body>

    <h1>Exemple JavaScript</h1>

    <p>Cliquez sur le bouton pour changer le texte de cet élément.</p>

    <button onclick="changeText()">Changer le texte</button>

    <p id="demo">JavaScript peut changer ce texte.</p>

    <script>
        function changeText() {
            document.getElementById('demo').innerHTML = 'Le texte a été modifié avec succès.';
        }
    </script>

</body>
</html>
