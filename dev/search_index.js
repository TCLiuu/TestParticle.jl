var documenterSearchIndex = {"docs":
[{"location":"internal/","page":"Internal","title":"Internal","text":"Modules = [TestParticle]","category":"page"},{"location":"internal/#TestParticle.dipole-Tuple{Any,Any}","page":"Internal","title":"TestParticle.dipole","text":"Calculates the magnetic field from a dipole with magnetic moment M at r.\n\n\n\n\n\n","category":"method"},{"location":"internal/#TestParticle.prepare-Tuple{Any,Any,Any}","page":"Internal","title":"TestParticle.prepare","text":"prepare(grid, E, B, species=\"proton\")\n\nReturn a tuple consists of particle charge, mass for a prescribed species and interpolated EM field functions. \n\n\n\n\n\n","category":"method"},{"location":"internal/#TestParticle.prepare-Tuple{Any,Any}","page":"Internal","title":"TestParticle.prepare","text":"prepare(E, B, species=\"proton\")\n\nReturn a tuple consists of particle charge, mass for a prescribed species and analytic EM field functions. \n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = TestParticle","category":"page"},{"location":"#TestParticle","page":"Home","title":"TestParticle","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Test particle tracing in a static electromagnetic field.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package supports charged particle tracing in","category":"page"},{"location":"","page":"Home","title":"Home","text":"an analytic electric and magnetic field;\na numeric electric and magnetic field.","category":"page"},{"location":"","page":"Home","title":"Home","text":"All tracing are done in 3D. For a numerical field, the mesh is constructed with Meshes.jl, and the field is interpolated with the aid of Interpolations.jl. For an analytical field, the user is responsible for providing the function for calculating the field at a given spatial location. The actual tracing is done through DifferentialEquations.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Nothing can be done such easily without the support of the Julia community. I appreciate all the contributions from developers around the world.","category":"page"},{"location":"example/#Examples","page":"Example","title":"Examples","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"Tracing in a Earth-like magnetic dipole field for protons at 50 keV (Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing proton in a uniform EM field in z (Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing electron and proton in a uniform EM field (real physical parameters) (Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing electrons in a uniform EM field (Image: )","category":"page"}]
}
