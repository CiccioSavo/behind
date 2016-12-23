function init_cubo() {

    var Three = THREE;
    var camera,
            light,
            renderer,
            scene,
            shape,
            controls,
            WIDTH,
            HEIGHT;

//WIDTH = window.innerWidth;
    WIDTH = $('#cubo').width();
//HEIGHT = window.innerHeight;
    HEIGHT = $('#cubo').height();

    var ASPECT = WIDTH / HEIGHT;
    var NEAR = 0.1;
    var FAR = 1000;
    var FOV = 45;

    var element = document.getElementById('cubo');

    function init(element) {
        var el = element;
        setupScene();
        light = createLights();
        shape = addPoints(0x000000, 50, 124, 124);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // to disable zoom
        controls.enableZoom = false;

// to disable rotation
        controls.enableRotate = false;

// to disable pan
        controls.enablePan = false;
        render();
    }

    init(element);

    function setupScene() {
        renderer = new Three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(WIDTH, HEIGHT);

        camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;

        scene = new Three.Scene();

        $(element).append(renderer.domElement);
    }


    function createLights() {
        var light = new Three.AmbientLight(0x000000);
        light.position.x = 0;
        light.position.y = 0;
        light.position.z = 0;
        scene.add(light);
        return light;
    }

    function addPoints(color, radius) {
        var DETAIL = 0;
        var geometry,
                material,
                shape;

//    geometry = new Three.OctahedronGeometry(radius, DETAIL);
//    geometry = new Three.IcosahedronGeometry(radius, DETAIL);
        geometry = new Three.CubeGeometry(80, 80, 80);
//    geometry = new Three.DodecahedronGeometry(radius, DETAIL);
//    geometry = new Three.TetrahedronGeometry()(radius, DETAIL);
        material = new Three.MeshPhongMaterial({
            emissive: 0x000000,
            color: color,
            transparent: true,
            opacity: 1,
            wireframe: true,
        });

        shape = new Three.Mesh(geometry, material);

        scene.add(shape);
        return shape;
    }

    function render() {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

}
function init_dodecaedro() {

    var Three = THREE;
    var camera,
            light,
            renderer,
            scene,
            shape,
            controls,
            WIDTH,
            HEIGHT;

//WIDTH = window.innerWidth;
    WIDTH = $('#dodecaedro').width();
//HEIGHT = window.innerHeight;
    HEIGHT = $('#dodecaedro').height();

    var ASPECT = WIDTH / HEIGHT;
    var ASPECT = 1;
    var NEAR = 0.1;
    var FAR = 1000;
    var FOV = 20;

    var element = document.getElementById('dodecaedro');

    function init(element) {
        var el = element;
        setupScene();
        light = createLights();
        shape = addPoints(0x000000, 50, 124, 124);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // to disable zoom
        controls.enableZoom = false;

// to disable rotation
        controls.enableRotate = false;

// to disable pan
        controls.enablePan = false;
        render();
    }

    init(element);

    function setupScene() {
        renderer = new Three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(WIDTH, HEIGHT);

        camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;

        scene = new Three.Scene();

        $(element).append(renderer.domElement);
    }


    function createLights() {
        var light = new Three.AmbientLight(0x000000);
        light.position.x = 0;
        light.position.y = 0;
        light.position.z = 500;
        scene.add(light);
        return light;
    }

    function addPoints(color, radius) {
        var DETAIL = 0;
        var geometry,
                material,
                shape;

//    geometry = new Three.OctahedronGeometry(radius, DETAIL);
//    geometry = new Three.IcosahedronGeometry(radius, DETAIL);
//        geometry = new Three.CubeGeometry(100, 100, 100);
        geometry = new Three.DodecahedronGeometry(radius, DETAIL);
//    geometry = new Three.TetrahedronGeometry()(radius, DETAIL);
        material = new Three.MeshPhongMaterial({
            emissive: 0x000000,
            color: color,
            transparent: true,
            opacity: 1,
            wireframe: true,
        });

        shape = new Three.Mesh(geometry, material);

        scene.add(shape);
        return shape;
    }

    function render() {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

}
function init_icosaedro() {

    var Three = THREE;
    var camera,
            light,
            renderer,
            scene,
            shape,
            controls,
            WIDTH,
            HEIGHT;

//WIDTH = window.innerWidth;
    WIDTH = $('#icosaedro').width();
//HEIGHT = window.innerHeight;
    HEIGHT = $('#icosaedro').height();

    var ASPECT = WIDTH / HEIGHT;
    var NEAR = 0.1;
    var FAR = 1000;
    var FOV = 45;

    var element = document.getElementById('icosaedro');

    function init(element) {
        var el = element;
        setupScene();
        light = createLights();
        shape = addPoints(0x000000, 50, 124, 124);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // to disable zoom
        controls.enableZoom = false;

// to disable rotation
        controls.enableRotate = false;

// to disable pan
        controls.enablePan = false;
        render();
    }

    init(element);

    function setupScene() {
        renderer = new Three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(WIDTH, HEIGHT);

        camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;

        scene = new Three.Scene();

        $(element).append(renderer.domElement);
    }


    function createLights() {
        var light = new Three.AmbientLight(0x000000);
        light.position.x = 0;
        light.position.y = 0;
        light.position.z = 500;
        scene.add(light);
        return light;
    }

    function addPoints(color, radius) {
        var DETAIL = 0;
        var geometry,
                material,
                shape;

//    geometry = new Three.OctahedronGeometry(radius, DETAIL);
        geometry = new Three.IcosahedronGeometry(radius, DETAIL);
//        geometry = new Three.CubeGeometry(100, 100, 100);
//    geometry = new Three.DodecahedronGeometry(radius, DETAIL);
//    geometry = new Three.TetrahedronGeometry()(radius, DETAIL);
        material = new Three.MeshPhongMaterial({
            emissive: 0x000000,
            color: color,
            transparent: true,
            opacity: 1,
            wireframe: true,
        });

        shape = new Three.Mesh(geometry, material);

        scene.add(shape);
        return shape;
    }

    function render() {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

}
function init_octaedro() {

    var Three = THREE;
    var camera,
            light,
            renderer,
            scene,
            shape,
            controls,
            WIDTH,
            HEIGHT;

//WIDTH = window.innerWidth;
    WIDTH = $('#octaedro').width();
//HEIGHT = window.innerHeight;
    HEIGHT = $('#octaedro').height();

    var ASPECT = WIDTH / HEIGHT;
    var NEAR = 0.1;
    var FAR = 1000;
    var FOV = 45;

    var element = document.getElementById('octaedro');

    function init(element) {
        var el = element;
        setupScene();
        light = createLights();
        shape = addPoints(0x000000, 50, 124, 124);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // to disable zoom
        controls.enableZoom = false;

// to disable rotation
        controls.enableRotate = false;

// to disable pan
        controls.enablePan = false;
        render();
    }

    init(element);

    function setupScene() {
        renderer = new Three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(WIDTH, HEIGHT);

        camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;

        scene = new Three.Scene();

        $(element).append(renderer.domElement);
    }


    function createLights() {
        var light = new Three.AmbientLight(0x000000);
        light.position.x = 0;
        light.position.y = 0;
        light.position.z = 500;
        scene.add(light);
        return light;
    }

    function addPoints(color, radius) {
        var DETAIL = 0;
        var geometry,
                material,
                shape;

        geometry = new Three.OctahedronGeometry(radius, DETAIL);
//    geometry = new Three.IcosahedronGeometry(radius, DETAIL);
//        geometry = new Three.CubeGeometry(100, 100, 100);
//    geometry = new Three.DodecahedronGeometry(radius, DETAIL);
//    geometry = new Three.TetrahedronGeometry()(radius, DETAIL);
        material = new Three.MeshPhongMaterial({
            emissive: 0x000000,
            color: color,
            transparent: true,
            opacity: 1,
            wireframe: true,
        });

        shape = new Three.Mesh(geometry, material);

        scene.add(shape);
        return shape;
    }

    function render() {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

}
function init_tetraedro() {

    var Three = THREE;
    var camera,
            light,
            renderer,
            scene,
            shape,
            controls,
            WIDTH,
            HEIGHT;

//WIDTH = window.innerWidth;
    WIDTH = $('#tetraedro').width();
//HEIGHT = window.innerHeight;
    HEIGHT = $('#tetraedro').height();

    var ASPECT = WIDTH / HEIGHT;
    var ASPECT = 1;
    var NEAR = 0.1;
    var FAR = 1000;
    var FOV = 20;

    var element = document.getElementById('tetraedro');

    function init(element) {
        var el = element;
        setupScene();
        light = createLights();
        shape = addPoints(0x000000, 50, 124, 124);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // to disable zoom
        controls.enableZoom = false;
        // to disable rotation
        controls.enableRotate = false;

// to disable pan
        controls.enablePan = false;
        render();
    }

    init(element);

    function setupScene() {
        renderer = new Three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(WIDTH, HEIGHT);

        camera = new Three.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;

        scene = new Three.Scene();

        $(element).append(renderer.domElement);
    }


    function createLights() {
        var light = new Three.AmbientLight(0x000000);
        light.position.x = 0;
        light.position.y = 0;
        light.position.z = 500;
        scene.add(light);
        return light;
    }

    function addPoints(color, radius) {
        var DETAIL = 0;
        var geometry,
                material,
                shape;

//    geometry = new Three.OctahedronGeometry(radius, DETAIL);
//    geometry = new Three.IcosahedronGeometry(radius, DETAIL);
//        geometry = new Three.CubeGeometry(100, 100, 100);
//    geometry = new Three.DodecahedronGeometry(radius, DETAIL);
        geometry = new Three.TetrahedronGeometry(radius, DETAIL);
        material = new Three.MeshPhongMaterial({
            emissive: 0x000000,
            color: color,
            transparent: true,
            opacity: 1,
            wireframe: true,
        });

        shape = new Three.Mesh(geometry, material);

        scene.add(shape);
        return shape;
    }

    function render() {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

}



$(window).ready(function () {
    init_cubo();
    init_dodecaedro();
    init_icosaedro();
    init_tetraedro();
    init_octaedro();
});

$(window).resize(function () {
    init_cubo();
    init_dodecaedro();
    init_icosaedro();
    init_tetraedro();
    init_octaedro();
});

