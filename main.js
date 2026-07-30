class ArkTsArrayBox {
    values;
    constructor(size, seed) {
        const len = size > 0 ? size : 1;
        this.values = new Array(len).fill(null);
        if (len > 0) { this.values[0] = seed; }
    }
    loadField(index) {
        return this.values[index % this.values.length];
    }
    storeField(index, value) {
        this.values[index % this.values.length] = value;
    }
}

function anyToInt(value) {
    if (typeof value === "number") { return value; }
    if (typeof value === "boolean") { return value ? 1 : 0; }
    return 0;
}

function anyToBoolean(value) {
    if (typeof value === "boolean") { return value; }
    if (typeof value === "number") { return (value) !== 0; }
    return false;
}

class FuzzControlException extends Error {
    payload;
    constructor(payload) {
        super("FuzzControlException");
        this.payload = payload;
    }
}

let terminationRequested= false;
const startTimeMs= Date.now();
const GC_PRESSURE= 4096;
let pressureSink= new Array(GC_PRESSURE).fill(null);

function shouldTerminate() {
    if (terminationRequested) { return true; }
    if ((Date.now() - startTimeMs) <= 30000) { return false; }
    terminationRequested = true;
    return true;
}

function tryGc() {
    // Best-effort: ArkTS exposes no public GC trigger. Apply allocation pressure and refresh
    // the sink so unreachable objects become collectible; FinalizationRegistry (P5) observes.
    for (let i = 0; i < GC_PRESSURE; i++) {
        if (shouldTerminate()) { return; }
        pressureSink[i % GC_PRESSURE] = { n: i };
    }
    pressureSink = new Array(GC_PRESSURE).fill(null);
}

function alloc(block) {
    if (shouldTerminate()) { return null; }
    return block();
}

// ---- Best-effort reachability oracle (P5, DOWNGRADED from the pure-kotlin sample) ----
// ArkTS has no force-GC; DEAD assertions are best-effort. gcEpoch is bumped when a
// FinalizationRegistry callback fires, so DEAD checks can be gated behind "GC has plausibly
// run" to reduce false positives. ALIVE is deterministic. This cannot match the determinism
// of kotlin.native.runtime.GC.collect().
const ReachabilityExpectation = { ALIVE: 0, DEAD: 1 };
let gcEpoch= 0;
const fr= new FinalizationRegistry((_held) => { gcEpoch = gcEpoch + 1; });
function assertReachability(label, expectation, value) {
    if (expectation === ReachabilityExpectation.ALIVE) {
        if (value == null) { throw new Error("Reachability oracle failed [" + label + "]: expected alive"); }
    } else {
        // DEAD is best-effort: without force-GC the object may not yet be collected, so a
        // non-null value here is NOT treated as a hard failure (would drown in false positives).
        // Real GC bugs still surface as crashes/aborts from the runtime itself.
    }
}
function registerObservation(observationId, target) {
    if (target != null) { fr.register(target, target); }
}
let g0= null
let g1= null
let g2= null
let g3= null
let g4= null
let g5= null
let g6= null
let g7= null
let g8= null
let g9= null
let g10= null
let g11= null
let g12= null
let g13= null
let g14= null
let g15= null
let g16= null
let g17= null
class Class0{
    constructor(f0, f1, f2, f3)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
    }
    f0= anyToInt(null)
    f1= null
    f2= anyToBoolean(null)
    f3= null
    loadField(index) {
        switch ((index % 4)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            case 3: return this.f3?.deref();
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 4)){
            case 0: this.f0 = anyToInt(value); break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = anyToBoolean(value); break;
            case 3: this.f3 = value == null ? null : new WeakRef(value); break;
            default:
        }
    }
}

class Class1{
    constructor(f0, f1)
    {
        this.f0 = f0
        this.f1 = f1
    }
    f0= anyToInt(null)
    f1= null
    loadField(index) {
        switch ((index % 2)){
            case 0: return this.f0;
            case 1: return this.f1;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 2)){
            case 0: this.f0 = anyToInt(value); break;
            case 1: this.f1 = value; break;
            default:
        }
    }
}

class Class2{
    constructor(f0, f1, f2, f3, f4)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
    }
    f0= null
    f1= null
    f2= anyToInt(null)
    f3= anyToInt(null)
    f4= null
    loadField(index) {
        switch ((index % 5)){
            case 0: return this.f0;
            case 1: return this.f1?.deref();
            case 2: return this.f2;
            case 3: return this.f3;
            case 4: return this.f4;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 5)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value == null ? null : new WeakRef(value); break;
            case 2: this.f2 = anyToInt(value); break;
            case 3: this.f3 = anyToInt(value); break;
            case 4: this.f4 = value; break;
            default:
        }
    }
}

class Class3{
    constructor(f0, f1, f2, f3)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
    }
    f0= null
    f1= anyToInt(null)
    f2= null
    f3= anyToInt(null)
    loadField(index) {
        switch ((index % 4)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            case 3: return this.f3;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 4)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = anyToInt(value); break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = anyToInt(value); break;
            default:
        }
    }
}

class Class4{
    constructor(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
        this.f5 = f5
        this.f6 = f6
        this.f7 = f7
        this.f8 = f8
        this.f9 = f9
        this.f10 = f10
        this.f11 = f11
        this.f12 = f12
        this.f13 = f13
        this.f14 = f14
        this.f15 = f15
        this.f16 = f16
        this.f17 = f17
        this.f18 = f18
        this.f19 = f19
    }
    f0= null
    f1= null
    f2= null
    f3= null
    f4= null
    f5= null
    f6= anyToInt(null)
    f7= null
    f8= anyToInt(null)
    f9= null
    f10= anyToInt(null)
    f11= null
    f12= anyToInt(null)
    f13= null
    f14= null
    f15= null
    f16= null
    f17= null
    f18= null
    f19= null
    loadField(index) {
        switch ((index % 20)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2?.deref();
            case 3: return this.f3;
            case 4: return this.f4;
            case 5: return this.f5;
            case 6: return this.f6;
            case 7: return this.f7?.deref();
            case 8: return this.f8;
            case 9: return this.f9;
            case 10: return this.f10;
            case 11: return this.f11;
            case 12: return this.f12;
            case 13: return this.f13;
            case 14: return this.f14;
            case 15: return this.f15?.deref();
            case 16: return this.f16;
            case 17: return this.f17;
            case 18: return this.f18;
            case 19: return this.f19;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 20)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value == null ? null : new WeakRef(value); break;
            case 3: this.f3 = value; break;
            case 4: this.f4 = value; break;
            case 5: this.f5 = value; break;
            case 6: this.f6 = anyToInt(value); break;
            case 7: this.f7 = value == null ? null : new WeakRef(value); break;
            case 8: this.f8 = anyToInt(value); break;
            case 9: this.f9 = value; break;
            case 10: this.f10 = anyToInt(value); break;
            case 11: this.f11 = value; break;
            case 12: this.f12 = anyToInt(value); break;
            case 13: this.f13 = value; break;
            case 14: this.f14 = value; break;
            case 15: this.f15 = value == null ? null : new WeakRef(value); break;
            case 16: this.f16 = value; break;
            case 17: this.f17 = value; break;
            case 18: this.f18 = value; break;
            case 19: this.f19 = value; break;
            default:
        }
    }
}

class Class5{
    constructor(f0, f1, f2)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
    }
    f0= null
    f1= null
    f2= null
    loadField(index) {
        switch ((index % 3)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2?.deref();
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 3)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value == null ? null : new WeakRef(value); break;
            default:
        }
    }
}

class Class6{
    constructor(f0)
    {
        this.f0 = f0
    }
    f0= null
    loadField(index) {
        switch ((index % 1)){
            case 0: return this.f0;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 1)){
            case 0: this.f0 = value; break;
            default:
        }
    }
}

class Class7{
    constructor(f0, f1, f2, f3, f4, f5, f6, f7)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
        this.f5 = f5
        this.f6 = f6
        this.f7 = f7
    }
    f0= null
    f1= null
    f2= null
    f3= null
    f4= null
    f5= anyToInt(null)
    f6= anyToBoolean(null)
    f7= null
    loadField(index) {
        switch ((index % 8)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            case 3: return this.f3;
            case 4: return this.f4;
            case 5: return this.f5;
            case 6: return this.f6;
            case 7: return this.f7;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 8)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = value; break;
            case 4: this.f4 = value; break;
            case 5: this.f5 = anyToInt(value); break;
            case 6: this.f6 = anyToBoolean(value); break;
            case 7: this.f7 = value; break;
            default:
        }
    }
}

class Class8{
    constructor(f0, f1, f2, f3, f4, f5)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
        this.f5 = f5
    }
    f0= null
    f1= null
    f2= null
    f3= null
    f4= null
    f5= anyToInt(null)
    loadField(index) {
        switch ((index % 6)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            case 3: return this.f3;
            case 4: return this.f4;
            case 5: return this.f5;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 6)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = value; break;
            case 4: this.f4 = value; break;
            case 5: this.f5 = anyToInt(value); break;
            default:
        }
    }
}

class Class9{
    constructor(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
        this.f5 = f5
        this.f6 = f6
        this.f7 = f7
        this.f8 = f8
        this.f9 = f9
        this.f10 = f10
        this.f11 = f11
        this.f12 = f12
        this.f13 = f13
        this.f14 = f14
        this.f15 = f15
        this.f16 = f16
    }
    f0= null
    f1= null
    f2= null
    f3= null
    f4= null
    f5= anyToInt(null)
    f6= null
    f7= null
    f8= anyToInt(null)
    f9= anyToBoolean(null)
    f10= null
    f11= null
    f12= null
    f13= null
    f14= null
    f15= null
    f16= null
    loadField(index) {
        switch ((index % 17)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            case 3: return this.f3?.deref();
            case 4: return this.f4;
            case 5: return this.f5;
            case 6: return this.f6;
            case 7: return this.f7?.deref();
            case 8: return this.f8;
            case 9: return this.f9;
            case 10: return this.f10;
            case 11: return this.f11;
            case 12: return this.f12;
            case 13: return this.f13;
            case 14: return this.f14;
            case 15: return this.f15?.deref();
            case 16: return this.f16;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 17)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = value == null ? null : new WeakRef(value); break;
            case 4: this.f4 = value; break;
            case 5: this.f5 = anyToInt(value); break;
            case 6: this.f6 = value; break;
            case 7: this.f7 = value == null ? null : new WeakRef(value); break;
            case 8: this.f8 = anyToInt(value); break;
            case 9: this.f9 = anyToBoolean(value); break;
            case 10: this.f10 = value; break;
            case 11: this.f11 = value; break;
            case 12: this.f12 = value; break;
            case 13: this.f13 = value; break;
            case 14: this.f14 = value; break;
            case 15: this.f15 = value == null ? null : new WeakRef(value); break;
            case 16: this.f16 = value; break;
            default:
        }
    }
}

class Class10{
    constructor(f0, f1, f2)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
    }
    f0= null
    f1= null
    f2= null
    loadField(index) {
        switch ((index % 3)){
            case 0: return this.f0;
            case 1: return this.f1;
            case 2: return this.f2;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 3)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value; break;
            case 2: this.f2 = value; break;
            default:
        }
    }
}

class Class11{
    constructor(f0, f1, f2, f3, f4, f5, f6)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
        this.f5 = f5
        this.f6 = f6
    }
    f0= null
    f1= null
    f2= null
    f3= anyToInt(null)
    f4= anyToBoolean(null)
    f5= anyToInt(null)
    f6= anyToInt(null)
    loadField(index) {
        switch ((index % 7)){
            case 0: return this.f0;
            case 1: return this.f1?.deref();
            case 2: return this.f2;
            case 3: return this.f3;
            case 4: return this.f4;
            case 5: return this.f5;
            case 6: return this.f6;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 7)){
            case 0: this.f0 = value; break;
            case 1: this.f1 = value == null ? null : new WeakRef(value); break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = anyToInt(value); break;
            case 4: this.f4 = anyToBoolean(value); break;
            case 5: this.f5 = anyToInt(value); break;
            case 6: this.f6 = anyToInt(value); break;
            default:
        }
    }
}

class Class12{
    constructor(f0, f1, f2, f3, f4)
    {
        this.f0 = f0
        this.f1 = f1
        this.f2 = f2
        this.f3 = f3
        this.f4 = f4
    }
    f0= null
    f1= null
    f2= null
    f3= anyToInt(null)
    f4= null
    loadField(index) {
        switch ((index % 5)){
            case 0: return this.f0?.deref();
            case 1: return this.f1?.deref();
            case 2: return this.f2;
            case 3: return this.f3;
            case 4: return this.f4;
            default:
        }
    }
    storeField(index, value) {
        switch ((index % 5)){
            case 0: this.f0 = value == null ? null : new WeakRef(value); break;
            case 1: this.f1 = value == null ? null : new WeakRef(value); break;
            case 2: this.f2 = value; break;
            case 3: this.f3 = anyToInt(value); break;
            case 4: this.f4 = value; break;
            default:
        }
    }
}

function fun0(l0, l1, l2) {
    g1 = l2
    let l3= alloc(() => { return new Class7(null, null, null, null, null, null, null, null); })
    tryGc()
    g14
    tryGc()
    let l5= alloc(() => { return new Class12(null, null, null, null, null); })
    let l6= alloc(() => { return new Class9(l2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    let l7= alloc(() => { return new Class1(g5, l3?.loadField(6)); })
    let l8= alloc(() => { return new Class6(null); })
    l3?.storeField(0, l6?.loadField(11))
    g11
    g9 = l7?.loadField(0)
    l6 = l8?.loadField(0)
    let l10= alloc(() => { return new Class1(g6, g3); })
    l0
    l10?.loadField(0)
    g10 = g13
    tryGc()
    let l13= alloc(() => { return new Class5(l2, g5, g7); })
    g3 = l10?.loadField(0)
    let l14= alloc(() => { return new Class0(l0, null, null, null); })
    let l15= alloc(() => { return new Class6(g7); })
    tryGc()
    return null
}

function fun1(l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10) {
    tryGc()
    let l11= alloc(() => { return new Class12(null, null, null, null, null); })
    l11?.storeField(4, g3)
    let l12= alloc(() => { return new Class8(g10, g16, null, null, null, null); })
    g8
    let l14= alloc(() => { return new Class0(l9, g5, null, null); })
    l11 = l2
    g13 = l3
    for (let i = 0; i < 39; i++){
        alloc(() => { return new Class6(null); })
    }
    g3 = g4
    g15
    l10
    l12?.storeField(1, g2)
    tryGc()
    l0
    g7
    tryGc()
    let l19= alloc(() => { return new Class6(l12?.loadField(0)); })
    return null
}

function fun2(l0, l1) {
    g9 = l1
    let l2= alloc(() => { return new Class9(l1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    g2 = l1
    g8 = l0
    g16
    g4
    g13 = g13
    let l5= alloc(() => { return new Class0(g12, g3, null, null); })
    for (let i = 0; i < 56; i++){
        alloc(() => { return new Class2(null, null, null, null, null); })
    }
    let l6= alloc(() => { return new Class11(g0, null, null, null, null, null, null); })
    let l7= alloc(() => { return new Class8(g1, l5?.loadField(2), null, null, null, null); })
    let l8= alloc(() => { return new Class11(g2, l6?.loadField(4), l2?.loadField(5), null, null, null, null); })
    let l9= alloc(() => { return new Class5(g12, null, null); })
    l8?.storeField(6, g16)
    return null
}

function fun3(l0) {
    let l1= alloc(() => { return new Class12(g14, null, null, null, null); })
    g8 = l1?.loadField(1)
    l1 = g0
    g0 = l0
    g1 = g6
    tryGc()
    g10 = l1?.loadField(2)
    let l2= alloc(() => { return new Class7(g14, null, null, null, null, null, null, null); })
    g17 = l0
    l1 = l2?.loadField(7)
    g15
    l1?.storeField(0, g2)
    for (let i = 0; i < 35; i++){
        alloc(() => { return new Class7(null, null, null, null, null, null, null, null); })
    }
    let l4= alloc(() => { return new Class0(null, null, null, null); })
    for (let i = 0; i < 17; i++){
        alloc(() => { return new Class7(null, null, null, null, null, null, null, null); })
    }
    g11 = g4
    tryGc()
    g1 = l4?.loadField(1)
    tryGc()
    let l5= alloc(() => { return new Class12(g7, null, null, null, null); })
    g3 = g13
    g14
    return null
}

function fun4(l0, l1) {
    g11
    let l3= alloc(() => { return new Class0(g1, l1, l1, null); })
    let l4= alloc(() => { return new Class8(g16, l0, g16, g8, l3?.loadField(3), g4); })
    g15 = g7
    let l5= alloc(() => { return new Class4(g16, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    tryGc()
    for (let i = 0; i < 10; i++){
        alloc(() => { return new Class6(null); })
    }
    let l6= alloc(() => { return new Class12(null, null, null, null, null); })
    let l7= alloc(() => { return new Class0(g1, g0, g12, null); })
    tryGc()
    g0 = g2
    g2 = g8
    tryGc()
    g7 = g15
    l7 = l7?.loadField(0)
    return null
}

function fun5(l0, l1, l2) {
    g14 = l0
    let l3= alloc(() => { return new Class1(g15, l0); })
    let l4= alloc(() => { return new Class0(g8, null, null, null); })
    l4?.loadField(3)
    for (let i = 0; i < 55; i++){
        alloc(() => { return new Class7(null, null, null, null, null, null, null, null); })
    }
    g1
    let l7= alloc(() => { return new Class1(l4?.loadField(0), l0); })
    tryGc()
    return null
}

function fun6(l0, l1) {
    let l2= alloc(() => { return new Class10(null, g3, g16); })
    let l3= alloc(() => { return new Class11(g5, l1, g16, null, null, null, null); })
    g4
    tryGc()
    let l5= alloc(() => { return new Class0(g2, l2?.loadField(1), g4, g3); })
    let l6= alloc(() => { return new Class6(g0); })
    g5 = g10
    tryGc()
    g11 = l0
    return null
}

function fun7(l0) {
    let l1= alloc(() => { return new Class10(g2, null, null); })
    let l2= alloc(() => { return new Class1(g9, l0); })
    g6
    let l4= alloc(() => { return new Class6(g15); })
    g11 = g9
    tryGc()
    l2?.loadField(1)
    g2 = g8
    let l6= alloc(() => { return new Class4(g13, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    let l7= alloc(() => { return new Class0(g2, null, null, null); })
    let l8= alloc(() => { return new Class2(l6?.loadField(5), g3, g14, g8, null); })
    g12 = g17
    let l9= alloc(() => { return new Class5(l4?.loadField(0), null, null); })
    g9 = g8
    for (let i = 0; i < 64; i++){
        alloc(() => { return new Class11(null, null, null, null, null, null, null); })
    }
    return null
}

function fun8(l0) {
    let l1= alloc(() => { return new Class8(null, null, null, null, null, null); })
    let l2= alloc(() => { return new Class5(g3, g13, g10); })
    g2 = g16
    g4
    tryGc()
    l1?.storeField(4, g17)
    g12 = g0
    let l4= alloc(() => { return new Class4(g9, l2?.loadField(2), l1?.loadField(5), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    for (let i = 0; i < 59; i++){
        alloc(() => { return new Class12(null, null, null, null, null); })
    }
    g0 = g13
    g17
    l2?.storeField(1, l2?.loadField(0))
    let l6= alloc(() => { return new Class3(g5, null, null, null); })
    let l7= alloc(() => { return new Class3(g3, g11, l6?.loadField(1), null); })
    tryGc()
    g7 = g6
    g12 = g11
    tryGc()
    tryGc()
    l1 = l2?.loadField(1)
    l2?.storeField(2, g1)
    return null
}

function fun9() {
    g4
    g15 = g2
    g12 = g4
    g5
    g0 = g13
    g0 = g8
    g2 = g1
    g14 = g10
    let l2= alloc(() => { return new Class11(g0, g6, g1, null, null, null, null); })
    tryGc()
    g8 = g11
    l2?.storeField(0, l2?.loadField(5))
    for (let i = 0; i < 20; i++){
        alloc(() => { return new Class12(null, null, null, null, null); })
    }
    for (let i = 0; i < 12; i++){
        alloc(() => { return new Class12(null, null, null, null, null); })
    }
    g1 = l2?.loadField(1)
    for (let i = 0; i < 20; i++){
        alloc(() => { return new Class6(null); })
    }
    g10 = g13
    let l3= alloc(() => { return new Class4(l2?.loadField(3), g12, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    g14 = l2?.loadField(4)
    l2 = l2?.loadField(1)
    return null
}

function fun10(l0, l1, l2, l3) {
    let l4= alloc(() => { return new Class7(g4, l2, null, null, null, null, null, null); })
    l4?.storeField(3, g17)
    for (let i = 0; i < 35; i++){
        alloc(() => { return new Class9(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    }
    tryGc()
    tryGc()
    let l5= alloc(() => { return new Class4(l4?.loadField(4), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    let l6= alloc(() => { return new Class6(g14); })
    g3 = l0
    for (let i = 0; i < 33; i++){
        alloc(() => { return new Class3(null, null, null, null); })
    }
    l6?.storeField(0, g17)
    return null
}

function fun11() {
    g3
    g3 = g2
    let l1= alloc(() => { return new Class1(g9, g4); })
    l1 = g17
    g17
    g10 = g3
    let l3= alloc(() => { return new Class11(null, null, null, null, null, null, null); })
    let l4= alloc(() => { return new Class4(g8, l3?.loadField(5), g4, g1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    l4 = g13
    let l5= alloc(() => { return new Class6(g6); })
    g7 = g6
    l5?.storeField(0, l3?.loadField(3))
    for (let i = 0; i < 54; i++){
        alloc(() => { return new Class0(null, null, null, null); })
    }
    g12
    tryGc()
    let l7= alloc(() => { return new Class8(g9, g9, null, null, null, null); })
    return null
}

function fun12(l0, l1, l2, l3, l4) {
    let l5= alloc(() => { return new Class8(g7, null, null, null, null, null); })
    g15 = g1
    tryGc()
    let l6= alloc(() => { return new Class7(g7, g12, l4, null, null, null, null, null); })
    let l7= alloc(() => { return new Class6(g2); })
    g6 = g12
    tryGc()
    let l8= alloc(() => { return new Class9(l0, l7?.loadField(0), l7?.loadField(0), l2, g3, g4, l6?.loadField(5), g10, g0, g4, null, null, null, null, null, null, null); })
    let l9= alloc(() => { return new Class9(g9, g7, g11, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    tryGc()
    let l10= alloc(() => { return new Class12(g17, l9?.loadField(5), g15, g16, l2); })
    tryGc()
    let l11= alloc(() => { return new Class12(g2, null, null, null, null); })
    let l12= alloc(() => { return new Class3(g3, null, null, null); })
    let l13= alloc(() => { return new Class6(l8?.loadField(9)); })
    let l14= alloc(() => { return new Class7(g1, l1, g5, null, null, null, null, null); })
    l7?.storeField(0, l11?.loadField(3))
    tryGc()
    g17 = g9
    g7 = g13
    g4 = g3
    let l15= alloc(() => { return new Class3(g0, l1, g7, null); })
    g10 = g9
    g7 = g7
    for (let i = 0; i < 22; i++){
        alloc(() => { return new Class0(null, null, null, null); })
    }
    for (let i = 0; i < 23; i++){
        alloc(() => { return new Class9(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    }
    l9 = g2
    let l16= alloc(() => { return new Class5(null, null, null); })
    g9
    l7?.storeField(0, g0)
    return null
}

function fun13(l0) {
    let l1= alloc(() => { return new Class8(l0, null, null, null, null, null); })
    let l2= alloc(() => { return new Class4(null, g6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    l1?.storeField(2, g9)
    l2?.loadField(14)
    tryGc()
    g17
    g14 = g9
    tryGc()
    let l5= alloc(() => { return new Class1(null, g14); })
    l5?.storeField(1, g17)
    l5?.loadField(0)
    let l7= alloc(() => { return new Class2(l5?.loadField(1), g10, g11, null, g15); })
    g4 = l5?.loadField(0)
    l0
    let l9= alloc(() => { return new Class0(l0, null, null, null); })
    return null
}

function fun14() {
    g17 = g2
    g0 = g5
    let l0= alloc(() => { return new Class9(null, g17, g3, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    l0 = g3
    g15 = l0?.loadField(9)
    l0 = l0?.loadField(11)
    tryGc()
    tryGc()
    g2 = g7
    g8 = l0?.loadField(5)
    tryGc()
    l0?.loadField(4)
    return null
}

function fun15() {
    g13 = g1
    g5 = g17
    g3 = g8
    tryGc()
    tryGc()
    g11 = g7
    g7 = g7
    g9
    tryGc()
    g0 = g15
    return null
}

function fun16(l0, l1, l2, l3) {
    for (let i = 0; i < 51; i++){
        alloc(() => { return new Class3(null, null, null, null); })
    }
    let l4= alloc(() => { return new Class6(null); })
    l1
    let l6= alloc(() => { return new Class3(g4, g4, null, null); })
    let l7= alloc(() => { return new Class6(l1); })
    for (let i = 0; i < 64; i++){
        alloc(() => { return new Class11(null, null, null, null, null, null, null); })
    }
    null
    for (let i = 0; i < 8; i++){
        alloc(() => { return new Class11(null, null, null, null, null, null, null); })
    }
    let l9= alloc(() => { return new Class8(null, l6?.loadField(3), null, null, null, null); })
    let l10= alloc(() => { return new Class12(g3, g4, g13, g5, null); })
    g12 = g14
    l10 = g5
    let l11= alloc(() => { return new Class1(null, null); })
    for (let i = 0; i < 62; i++){
        alloc(() => { return new Class12(null, null, null, null, null); })
    }
    tryGc()
    let l12= alloc(() => { return new Class8(g9, g8, null, null, null, null); })
    l4?.storeField(0, g3)
    g11
    l7?.storeField(0, l4?.loadField(0))
    tryGc()
    l2
    let l15= alloc(() => { return new Class8(g15, g12, null, null, null, null); })
    g1
    for (let i = 0; i < 44; i++){
        alloc(() => { return new Class1(null, null); })
    }
    let l17= alloc(() => { return new Class9(g16, l2, l9?.loadField(3), g11, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    g11 = g5
    g10 = g10
    l9?.storeField(1, g0)
    let l18= alloc(() => { return new Class3(g11, l2, null, null); })
    return null
}

function fun17(l0, l1, l2) {
    let l3= alloc(() => { return new Class11(g13, null, l2, null, g4, g14, g5); })
    let l4= alloc(() => { return new Class12(g0, null, null, null, null); })
    l3?.storeField(2, g11)
    l3?.storeField(0, g10)
    let l5= alloc(() => { return new Class4(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    l3 = g5
    let l6= alloc(() => { return new Class12(l5?.loadField(3), g14, null, null, null); })
    let l7= alloc(() => { return new Class10(g12, g4, null); })
    g2
    let l9= alloc(() => { return new Class3(l5?.loadField(18), g5, null, null); })
    g0
    return null
}

function fun18(l0, l1, l2, l3) {
    let l4= alloc(() => { return new Class1(g8, g15); })
    g1 = l0
    tryGc()
    let l5= alloc(() => { return new Class10(g8, null, null); })
    for (let i = 0; i < 52; i++){
        alloc(() => { return new Class1(null, null); })
    }
    let l6= alloc(() => { return new Class0(g13, null, null, null); })
    tryGc()
    l5?.storeField(0, g13)
    let l7= alloc(() => { return new Class5(null, g14, null); })
    let l8= alloc(() => { return new Class9(g3, g1, l2, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    let l9= alloc(() => { return new Class9(l3, g9, g16, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    g3 = g9
    tryGc()
    tryGc()
    tryGc()
    for (let i = 0; i < 14; i++){
        alloc(() => { return new Class9(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    }
    l9 = l3
    for (let i = 0; i < 42; i++){
        alloc(() => { return new Class11(null, null, null, null, null, null, null); })
    }
    let l10= alloc(() => { return new Class3(l8?.loadField(15), l0, l2, g7); })
    let l11= alloc(() => { return new Class6(l1); })
    l8?.storeField(1, g12)
    for (let i = 0; i < 8; i++){
        alloc(() => { return new Class9(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    }
    l11 = g3
    g1
    tryGc()
    let l13= alloc(() => { return new Class3(g14, l4?.loadField(1), g17, null); })
    let l14= alloc(() => { return new Class12(null, null, null, null, null); })
    l14 = l7?.loadField(0)
    tryGc()
    let l15= alloc(() => { return new Class8(g17, g12, l10?.loadField(1), null, null, null); })
    l8 = g4
    return null
}

function fun19(l0, l1, l2) {
    g16 = g5
    g4 = g1
    g8 = g3
    g17 = g10
    tryGc()
    g6
    l2
    tryGc()
    g2 = l2
    let l5= alloc(() => { return new Class3(null, null, null, null); })
    g12 = l0
    g16 = l2
    g9 = l2
    tryGc()
    l1
    l1
    for (let i = 0; i < 48; i++){
        alloc(() => { return new Class0(null, null, null, null); })
    }
    tryGc()
    g10 = g7
    l5?.storeField(1, l2)
    let l8= alloc(() => { return new Class3(l1, null, null, null); })
    return null
}


function mainBodyImpl() {
    g10
    let l1= alloc(() => { return new Class9(g1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    for (let i = 0; i < 8; i++){
        alloc(() => { return new Class3(null, null, null, null); })
    }
    let l2= alloc(() => { return new Class0(null, null, null, g17); })
    tryGc()
    let l3= alloc(() => { return new Class7(l1?.loadField(16), null, null, null, null, null, null, null); })
    g15 = g9
    tryGc()
    let l4= alloc(() => { return new Class4(g6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null); })
    for (let i = 0; i < 10; i++){
        alloc(() => { return new Class10(null, null, null); })
    }
    tryGc()
    g6 = l4?.loadField(1)
    tryGc()
    g0 = g2
    let l5= alloc(() => { return new Class3(g3, g3, null, null); })
    let l6= alloc(() => { return new Class3(null, null, null, null); })
    return null
}

function main() {
    for (let i = 0; i < 20000; i++){
        if (shouldTerminate()) return
        mainBodyImpl()
    }
    terminationRequested = true
    tryGc()
}

try {
    main()
} catch (e) {
    ;(typeof console !== "undefined") ? console.log("fuzz-terminated:", e) : print("fuzz-terminated:", e)
}
;(typeof console !== "undefined") ? console.log("fuzz-case-done") : print("fuzz-case-done")
