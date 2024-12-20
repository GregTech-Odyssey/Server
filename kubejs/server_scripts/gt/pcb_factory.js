ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    const circuit_board = [["gtceu:polyethylene_plate", 1], ["gtceu:polyvinyl_chloride_plate", 2], ["gtceu:polytetrafluoroethylene_plate", 4], ["gtceu:polybenzimidazole_plate", 8]]
    circuit_board.forEach((board) => {
        gtr.pcb_factory(board[0])
            .itemInputs("8x " + board[0], (32 + 32 * board[1]) + "x gtceu:copper_foil")
            .inputFluids("gtceu:sulfuric_acid " + 1000 * board[1], "gtceu:iron_iii_chloride " + 500 * board[1])
            .itemOutputs(8 * board[1] + "x gtceu:plastic_printed_circuit_board")
            .EUt(120)
            .duration(400 * board[1])

        gtr.pcb_factory(board[0] + 1)
            .itemInputs("8x " + board[0], (32 + 32 * board[1]) + "x gtceu:copper_foil")
            .inputFluids("gtceu:sulfuric_acid " + 1000 * board[1], "gtceu:sodium_persulfate " + 1000 * board[1])
            .itemOutputs(8 * board[1] + "x gtceu:plastic_printed_circuit_board")
            .EUt(120)
            .duration(400 * board[1])
    })

    gtr.pcb_factory("gtocore:epoxy_printed_circuit_board")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtocore:epoxy_printed_circuit_board1")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 2000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtocore:fiber_reinforced_printed_circuit_board")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtocore:fiber_reinforced_printed_circuit_board1")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:sodium_persulfate 4000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtocore:multilayer_fiber_reinforced_printed_circuit_board")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtocore:multilayer_fiber_reinforced_printed_circuit_board1")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 8000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtocore:wetware_printed_circuit_board")
        .itemInputs("gtceu:wetware_circuit_board", "32x gtceu:niobium_titanium_foil")
        .inputFluids("gtceu:sodium_persulfate 1000", "gtceu:iron_iii_chloride 500")
        .itemOutputs("gtceu:wetware_printed_circuit_board")
        .EUt(1920)
        .duration(450)

    gtr.pcb_factory("gtocore:bioware_printed_circuit_board")
        .itemInputs("gtocore:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:sodium_persulfate 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("gtocore:bioware_printed_circuit_board")
        .EUt(7680)
        .duration(525)

    gtr.pcb_factory("gtocore:optical_circuit_board")
        .itemInputs("gtceu:kevlar_plate", "32x gtceu:rhodium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:mithril_plasma 100")
        .itemOutputs("gtocore:optical_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("gtocore:optical_printed_circuit_board")
        .itemInputs("gtocore:optical_circuit_board", "32x gtceu:ruthenium_foil")
        .inputFluids("gtceu:sodium_persulfate 4000", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("gtocore:optical_printed_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("gtocore:exotic_circuit_board")
        .itemInputs("2x gtceu:kevlar_plate", "32x gtceu:enderium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:vibranium_plasma 100")
        .itemOutputs("gtocore:exotic_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("gtocore:exotic_printed_circuit_board")
        .itemInputs("gtocore:exotic_circuit_board", "32x gtceu:americium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("gtocore:exotic_printed_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("gtocore:cosmic_circuit_board")
        .itemInputs("4x gtceu:kevlar_plate", "32x gtceu:heavy_quark_degenerate_matter_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:metastable_hassium_plasma 100")
        .itemOutputs("gtocore:cosmic_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("gtocore:cosmic_printed_circuit_board")
        .itemInputs("gtocore:cosmic_circuit_board", "32x gtceu:uruium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("gtocore:cosmic_printed_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("gtocore:supracausal_circuit_board")
        .itemInputs("gtocore:cosmic_circuit_board", "32x gtceu:echoite_foil")
        .inputFluids("gtceu:dense_neutron_plasma 1000", "gtceu:quantum_chromo_dynamically_confined_matter_plasma 100")
        .itemOutputs("gtocore:supracausal_circuit_board")
        .EUt(7680 * 256)
        .duration(1500)

    gtr.pcb_factory("gtocore:supracausal_printed_circuit_board")
        .itemInputs("gtocore:supracausal_circuit_board", "32x gtceu:legendarium_foil")
        .inputFluids("gtceu:sodium_persulfate 16000", "gtceu:iron_iii_chloride 8000")
        .itemOutputs("gtocore:supracausal_printed_circuit_board")
        .EUt(7680 * 256)
        .duration(1500)
})