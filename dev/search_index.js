var documenterSearchIndex = {"docs":
[{"location":"api/#Internal","page":"API","title":"Internal","text":"","category":"section"},{"location":"api/#Public-APIs","page":"API","title":"Public APIs","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [TestParticle]\nPrivate = false","category":"page"},{"location":"api/#TestParticle.prepare-Tuple{Any, Any, Any}","page":"API","title":"TestParticle.prepare","text":"prepare(E, B, F; species=Proton, q=1.0, m=1.0)\n\nReturn a tuple consists of particle charge, mass for a prescribed species of charge q and mass m, analytic EM field functions, and external force F.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.prepare-Tuple{Any, Any}","page":"API","title":"TestParticle.prepare","text":"prepare(E, B; species=Proton, q=1.0, m=1.0)\n\nReturn a tuple consists of particle charge, mass for a prescribed species of charge q and mass m and analytic EM field functions. Prescribed species are Electron and Proton; other species can be manually specified with species=Ion/User, q and m.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.prepare-Tuple{Meshes.CartesianGrid, Any, Any, Any}","page":"API","title":"TestParticle.prepare","text":"prepare(grid, E, B, F; species=Proton, q=1.0, m=1.0)\n\nReturn a tuple consists of particle charge, mass for a prescribed species of charge q and mass m, analytic EM field functions, and external force F.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.prepare-Tuple{Meshes.CartesianGrid, Any, Any}","page":"API","title":"TestParticle.prepare","text":"prepare(grid, E, B; species=Proton)\n\nReturn a tuple consists of particle charge, mass for a prescribed species and interpolated EM field functions. \n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_analytic!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_analytic!","text":"ODE equations for charged particle moving in static analytical EM field.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_analytic_relativistic!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_analytic_relativistic!","text":"ODE equations for relativistic charged particle moving in static analytical EM field.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_numeric!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_numeric!","text":"ODE equations for charged particle moving in static numerical EM field.\n\n\n\n\n\n","category":"method"},{"location":"api/#Private-types-and-methods","page":"API","title":"Private types and methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [TestParticle]\nPublic = false","category":"page"},{"location":"api/#TestParticle.dipole-Tuple{Any, Any}","page":"API","title":"TestParticle.dipole","text":"Calculates the magnetic field from a dipole with magnetic moment M at r.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.fieldline","page":"API","title":"TestParticle.fieldline","text":"fieldline(L, ϕ, nP)\n\nCreates points on one field line of the magnetic field from a dipole. In a centered dipole magnetic field model, the path along a given L shell can be described as r = L*cos²λ, where r is the radial distance (in planetary radii) to a point on the line, λ is its co-latitude, and L is the L-shell of interest.\n\n\n\n\n\n","category":"function"},{"location":"api/#TestParticle.getB_CS_harris-Tuple{Any, Any, Any}","page":"API","title":"TestParticle.getB_CS_harris","text":"getB_CS_harris(B₀, L)\n\nReturn the magnetic field at location r near a current sheet with magnetic strength B₀ and sheet length L.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.getB_bottle-NTuple{8, Any}","page":"API","title":"TestParticle.getB_bottle","text":"getB_bottle(x, y, z, distance, a, b, I1, I2) -> Vector{Float}\n\nGet magnetic field from a magnetic bottle. Reference: https://en.wikipedia.org/wiki/Magneticmirror#Magneticbottles\n\nArguments\n\nx,y,z::Float: location in [m].\ndistance::Float: distance between solenoids in [m].\na::Float: radius of each side coil in [m].\nb::Float: radius of central coil in [m].\nI1::Float: current in the solenoid times number of windings in side coils.\nI2::Float: current in the central solenoid times number of windings in the\n\ncentral loop.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.getB_dipole-Tuple{Any}","page":"API","title":"TestParticle.getB_dipole","text":"Analytic magnetic field function for testing. Return in SI unit.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.getB_tokamak-NTuple{7, Any}","page":"API","title":"TestParticle.getB_tokamak","text":"getB_tokamak(x, y, z, a, b, ICoils, IPlasma)\n\nGet the magnetic field from a Tokamak topology consists of 16 coils. Original: https://github.com/BoschSamuel/Simulation-of-a-Tokamak-Fusion-Reactor/blob/master/Simulation2.m\n\nArguments\n\nx,y,z::Float: location in [m].\na::Float: radius of each coil in [m].\nb::Float: radius of central region in [m].\nICoil::Float: current in the coil times number of windings.\nIPlasma::Float: current of the plasma?\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.getE_dipole-Tuple{Any}","page":"API","title":"TestParticle.getE_dipole","text":"Analytic electric field function for testing.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.set_axes_equal-Tuple{Any}","page":"API","title":"TestParticle.set_axes_equal","text":"set_axes_equal(ax)\n\nSet 3D plot axes to equal scale for Matplotlib. Make axes of 3D plot have equal scale so that spheres appear as spheres and cubes as cubes. Required since ax.axis('equal') and ax.set_aspect('equal') don't work on 3D.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.sph2cart-Tuple{Any, Any, Any}","page":"API","title":"TestParticle.sph2cart","text":"Convert from spherical to Cartesian coordinates vector.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_analytic_full!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_analytic_full!","text":"ODE equations for charged particle moving in static analytical EM field and external force field.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_numeric_full!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_numeric_full!","text":"ODE equations for charged particle moving in static numerical EM field and external force field.\n\n\n\n\n\n","category":"method"},{"location":"api/#TestParticle.trace_numeric_relativistic!-NTuple{4, Any}","page":"API","title":"TestParticle.trace_numeric_relativistic!","text":"ODE equations for relativistic charged particle moving in static numerical EM field.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = TestParticle","category":"page"},{"location":"#TestParticle","page":"Home","title":"TestParticle","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Test particle tracing in a static electromagnetic field.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package supports charged particle tracing in analytic/numerical relativistic/non-relativistic","category":"page"},{"location":"","page":"Home","title":"Home","text":"electric and magnetic field;\nbody force field.","category":"page"},{"location":"","page":"Home","title":"Home","text":"All tracing are done in 3D. For a numerical field, the mesh is constructed with Meshes.jl, and the field is interpolated with the aid of Interpolations.jl. For an analytical field, the user is responsible for providing the function for calculating the field at a given spatial location. The actual tracing is done through DifferentialEquations.jl.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#Acknowledgement","page":"Home","title":"Acknowledgement","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Nothing can be done such easily without the support of the Julia community. I appreciate all the contributions from developers around the world.","category":"page"},{"location":"example/#Examples","page":"Example","title":"Examples","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"Multiple demonstrations are provided. For all the tracing methods, we provide both an inplace version (with ! at the end of the function name) and a non-inplace version using StaticArrays. The non-inplace version requires the initial conditions to be static a static vector. Use them at your convenience.","category":"page"},{"location":"example/#Choice-of-numerical-algorithm","page":"Example","title":"Choice of numerical algorithm","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"By default DifferentialEquations.jl applies Tsit5 to a general ODE problem. However, it is not always guaranteed to work. For example, the demo case of electron tracing in the magnetic bottle with strong magnetic field is tested to work only with fixed timestep algorithms like Euler and the Adams-Bashforth family. It would take you some time to figure out which algorithm works for your problem!","category":"page"},{"location":"example/#Gallery","page":"Example","title":"Gallery","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"Tracing in a Earth-like magnetic dipole field for protons at 50 keV, source","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing proton in a uniform EM field in z","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing in a magnetic dipole field corresponds to a Harris current sheet with strength 20 nT and width 0.4 Re for protons at 50 keV, source","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing electron and proton in a uniform EM field (real physical parameters), source","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing electrons in a uniform EM field","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing relativistic electron close to the speed of light in a magnetic bottle, source","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: )","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Tracing relativistic proton in a Tokamak[1]","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"(Image: ), source As you can see from the trajectory, this proton will escape after a certain time.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"[1]: A excellent introduction video to Tokamak can be found here in Mandarin.","category":"page"}]
}
