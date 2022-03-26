<template>
    <section class="contenedor seccion descripcion">
        <h1>Direccion</h1>
        <h4>Horarios de atencion</h4>
        <p>Lunes - Viernes (08-AM - 8-PM)</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240900.22502216455!2d-99.40452608359374!3d19.366294000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201196dca8199%3A0xffe7560012c3a23b!2sCorporativo%20Microsoft%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1646262007352!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>        
    </section>
</template>
<style scoped>
    .descripcion{
        text-align: center;
        margin-top: 10rem;
        margin-bottom: 10rem;
    }

    @media (max-width: 768px) {
        iframe{
            width: 100%;
        }
    }
</style>
<script>
export default{
    name: 'Direccion',
}
</script>
