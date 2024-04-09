import type { AutocompleteOption } from '@skeletonlabs/skeleton';

export const tagOptions: AutocompleteOption<string>[] = [
        // Hardware wallets and other hardware
        { label: 'SeedSigner', value: 'seedsigner'},
        { label: 'Coldcard', value: 'coldcard'},
        { label: 'Foundation Passport', value: 'foundation_passport'},
        { label: 'Blockstream Jade', value: 'blockstream_jade'},
        { label: 'SpecterDIY', value: 'specterdiy'},
        { label: 'Ledger', value: 'ledger'},
        { label: 'Trezor', value: 'trezor'},
        { label: 'Bitbox', value: 'bitbox'},
        { label: 'Cobo Vault', value: 'cobo_vault'},
        { label: 'Keep key', value: 'keep_key'},
        { label: 'Krux', value: 'krux'},
        { label: 'Validating Lightning Signer', value: 'vls'},
        { label: 'BitKey', value: 'bitkey'},
        { label: 'Block Clock', value: 'block_clock'},
        { label: 'Opendime', value: 'opendime'},
        { label: 'SatsCard', value: 'satscard'},
        { label: 'TapSigner', value: 'tapsigner'},
        { label: 'SatChip', value: 'satchip'},
        { label: 'SatoChip', value: 'satochip'},
        { label: 'ColdPower', value: 'coldpower'},
        { label: 'SeedQR', value: 'seed_qr'},
        { label: 'SeedHammer', value: 'seed_hammer'},
        { label: 'SeedMint', value: 'seed_mint'},
        { label: 'NerdMiner', value: 'nerd_miner'},
        { label: 'SatsLink', value: 'satslink'},
        { label: 'BitCan', value: 'bitcan'},
        { label: 'RoninSteel', value: 'ronin_steel'},

        // Wallet software
        { label: 'Sparrow Wallet', value: 'sparrow_wallet'},
        { label: 'Nunchuk', value: 'nunchuk_wallet'},
        { label: 'Electrum', value: 'electrum_wallet'},
        { label: 'Specter Desktop', value: 'specter_desktop_wallet'},
        { label: 'Lily wallet', value: 'lily_wallet'},
        { label: 'Samourai Wallet', value: 'samourai_wallet'},
        { label: 'Blue Wallet', value: 'blue_wallet'},
        { label: 'Blockstream Green', value: 'blockstream_green_wallet'},
        { label: 'Envoy', value: 'envoy_wallet'},
        { label: 'Bitcoin Keeper', value: 'bitcoin_keeper_wallet'},
        { label: 'Hexa', value: 'hexa_wallet'},
        { label: 'Caravan', value: 'caravan_wallet'},
        { label: 'Muun wallet', value: 'muun_wallet'},
        { label: 'Phoenix', value: 'phoenix_wallet'},
        { label: 'PhoenixD', value: 'phoenixd'},
        { label: 'Breez', value: 'breez_wallet'},
        { label: 'Blixt', value: 'blixt_wallet'},
        { label: 'Mutiny wallet', value: 'mutiny_wallet'},
        { label: 'Simple Bitcoin Wallet', value: 'simple_bitcoin_wallet'},
        { label: 'Valet', value: 'valet_wallet'},
        { label: 'BitKit', value: 'bitkit_wallet'},
        { label: 'Nayuta', value: 'nayuta_wallet'},
        { label: 'Alby', value: 'alby_wallet'},
        { label: 'Zeus', value: 'zeus_wallet'},
        { label: 'Strike', value: 'strike_wallet'},
        { label: 'Wallet of Satoshi', value: 'wallet_of_satoshi'},
        { label: 'CoinOS', value: 'coinos_wallet'},
        { label: 'LNTipBot', value: 'ln_tip_bot'},
        { label: 'Plasma', value: 'plasma_wallet'},
        { label: 'Blink', value: 'blink_wallet'},
        { label: 'Chivo', value: 'chivo_wallet'},
        { label: 'CashApp', value: 'cashapp_wallet'},
        { label: 'Zebedee', value: 'zebedee_wallet'},
        { label: 'BitBanana', value: 'bitbanana_wallet'},
        { label: 'Spark', value: 'spark_wallet'},
        { label: 'Fully Noded', value: 'fully_noded'},
        { label: 'Thunderhub', value: 'thunderhub'},
        { label: 'Ride The Lightning', value: 'ride_the_lightning'},
        { label: 'Clams', value: 'clams_wallet'},
        { label: 'LNBits', value: 'lnbits'},
        { label: 'Liana', value: 'liana_wallet'},
        { label: 'Walletano', value: 'walletano'},
        { label: 'LifPay', value: 'lifpay_wallet'},
        { label: 'Wasabi wallet', value: 'wasabi_wallet'},
        { label: 'Trust wallet', value: 'trust_wallet'},
        { label: 'eNuts wallet', value: 'enuts_wallet'},
        { label: 'Minibits eCash wallet', value: 'minibits_wallet'},
        { label: 'Nutstash wallet', value: 'nutstash_wallet'},
        { label: 'Mercury wallet', value: 'mercury_wallet'},
        { label: 'MyCitadel wallet', value: 'mycitadel_wallet'},

        // Node implementations
        { label: 'Bitcoin Core', value: 'bitcoin_core'},
        { label: 'Bitcoin Knots', value: 'bitcoin_knots'},
        { label: 'LND', value: 'lnd'},
        { label: 'Core Lightning', value: 'clightning'},
        { label: 'Eclair', value: 'eclair'},

        // Node boxes and packages
        { label: 'Nix Bitcoin', value: 'nix_bitcoin'},
        { label: 'RaspiBlitz', value: 'raspiblitz'},
        { label: 'Ministry of Nodes', value: 'ministry_of_nodes'},
        { label: 'RoninDojo', value: 'ronindojo'},
        { label: 'Nodl', value: 'nodl'},
        { label: 'Raspibolt', value: 'raspibolt'},
        { label: 'MiniBolt', value: 'minibolt'},
        { label: 'Umbrel', value: 'umbrel'},
        { label: 'Thundroid', value: 'thundroid'},
        { label: 'Start9', value: 'start9'},
        { label: 'MyNode', value: 'my_node'},
        { label: 'Citadel', value: 'citadel'},
        { label: 'Floresta', value: 'floresta'},

        // Other software
        { label: 'Bitcoin-CLI', value: 'bitcoin_cli'},
        { label: 'Bitcoind', value: 'bitcoind'},
        { label: 'Electrum Rust Server', value: 'electrs'},
        { label: 'Fulcrum Server', value: 'fulcrum'},
        { label: 'BTC PayServer', value: 'btc_payserver'},
        { label: 'WhirlPool', value: 'whirlpool'},
        { label: 'JoinMarket', value: 'joinmarket'},
        { label: 'JoininBox', value: 'joinmarket_joininbox'},
        { label: 'JAM', value: 'joinmarket_jam'},
        { label: 'Samourai Dojo', value: 'samourai_dojo'},
        { label: 'Sentinel', value: 'sentinel'},
        { label: 'Sphinx', value: 'sphinx'},
        { label: 'Balance of Satoshis', value: 'lnd_bos'},
        { label: 'LND Helipad', value: 'lnd_helipad'},
        { label: 'LND Channel Tools', value: 'lnd_chan_tools'},
        { label: 'LND Tallycoin', value: 'lnd_tallycoin'},
        { label: 'Homer Dashboard', value: 'homer_dashboard'},
        { label: 'LNProxy Server', value: 'lnproxy_server'},
        { label: 'LND PyBlock', value: 'lnd_pyblock'},
        { label: 'ItchySats', value: 'itchysats'},
        { label: 'Mempool.space', value: 'mempool_space'},
        { label: 'BTC RPC Explorer', value: 'btc_rpc_explorer'},
        { label: 'Amboss', value: 'amboss'},
        { label: 'OXT.me', value: 'oxt'},
        { label: 'CKBunker', value: 'ckbunker'},
        { label: 'Unchained', value: 'unchained'},
        { label: 'Zaprite', value: 'zaprite'},
        { label: 'LND Lightning Terminal', value: 'lnd_lit'},
        { label: 'Lightning Loop', value: 'loop'},
        { label: 'Lightning Pool', value: 'pool'},
        { label: 'Lightning Faraday', value: 'faraday'},
        { label: 'Magma', value: 'magma'},
        { label: 'KeePass', value: 'keepass'},
        { label: 'Bitwarden', value: 'bitwarden'},
        { label: 'Proton VPN', value: 'proton_vpn'},
        { label: 'iVPN', value: 'ivpn'},
        { label: 'Mullvad VPN', value: 'mullvad_vpn'},
        { label: 'SimpleX', value: 'simplex'},
        { label: 'Voltage', value: 'voltage'},
        { label: 'Fedimint', value: 'fedimint'},
        { label: 'Cashu', value: 'cashu'},
        { label: 'Shopstr', value: 'shopstr'},
        { label: 'Geyser.fund', value: 'geyser'},
        { label: 'Fountain', value: 'fountain'},
        { label: 'ShopinBit', value: 'shopinbit'},
        { label: 'Stacker.news', value: 'stacker_news'},
        { label: 'Oshi', value: 'oshi'},
        { label: 'Lolli', value: 'lolli'},
        { label: 'BTC Map', value: 'btc_map'},
        { label: 'Blockstream GreenLight', value: 'blockstream_greenlight'},
        { label: 'Liquid network', value: 'liquid'},
        { label: 'BitStream', value: 'bitstream'},
        { label: 'BitVM', value: 'bitvm'},
        { label: 'HORNET storage', value: 'hornet_storage'},
        { label: 'LNeSIM', value: 'ln_esim'},
        { label: 'RGB', value: 'rgb'},
        { label: 'Zaplocker', value: 'zaplocker'},
        { label: 'Bitrefill', value: 'bitrefill'},
        { label: 'Zapple Pay', value: 'zapple_pay'},
        { label: 'Bolt.observer', value: 'bolt_observer'},

        // Exchanges, financial services
        { label: 'Bisq', value: 'bisq'},
        { label: 'HodlHodl', value: 'hodlhodl'},
        { label: 'Robosats', value: 'robosats'},
        { label: 'Peach Bitcoin', value: 'peach'},
        { label: 'AgoraDesk', value: 'agora_desk'},
        { label: 'Pocket', value: 'pocket'},
        { label: 'Azte.co', value: 'azteco'},
        { label: 'Bitcoin Reserve', value: 'bitcoin_reserve'},
        { label: 'Bitkipi', value: 'bitkipi'},
        { label: 'Bitonic', value: 'bitonic'},
        { label: 'Bittr', value: 'bittr'},
        { label: 'BullBitcoin', value: 'bullbitcoin'},
        { label: 'FastBitcoins', value: 'fastbitcoins'},
        { label: 'Relai', value: 'relai'},
        { label: 'River', value: 'river'},
        { label: 'Swan Bitcoin', value: 'swan_bitcoin'},
        { label: 'Loan Shark', value: 'loan_shark'},
        { label: 'Firefish.io', value: 'firefish_io'},
        { label: 'Vexl.it', value: 'vexl'},
        { label: 'Coinbase', value: 'coinbase'},
        { label: 'Kraken', value: 'kraken'},
        { label: 'Bitstamp', value: 'bitstamp'},
        { label: 'OKCoin', value: 'okcoin'},
        { label: 'Binance', value: 'binance'},
        { label: 'Bitfinex', value: 'bitfinex'},
        { label: 'Gemini', value: 'gemini'},
        { label: 'Boltz Exchange', value: 'boltz_exchange'},
        { label: 'Resolvr', value: 'resolvr'},
        { label: 'BitEscrow', value: 'bit_escrow'},
        { label: 'Torq', value: 'torq'},

        // Mining
        { label: 'Home mining', value: 'home_mining'},
        { label: 'Braains', value: 'braiins'},
        { label: 'Mining Pools', value: 'mining_pools'},
        { label: 'OCEAN Pool', value: 'ocean_pool'},
        { label: 'F2Pool', value: 'f2pool'},
        { label: 'AntPool', value: 'antpool'},
        { label: 'Luxor', value: 'luxor'},
        { label: 'ProHashing', value: 'pro_hashing'},
        { label: 'Mining-Dutch', value: 'mining_dutch'},
        { label: 'Mining Pool Hub', value: 'mining_pool_hub'},
        { label: 'Blockware Pools', value: 'blockware_pools'},
        { label: 'BTC Pool', value: 'btc_pool'},
        { label: 'BTC Mill', value: 'btc_mill'},
        { label: 'Cruxpool', value: 'crux_pool'},
        { label: 'Dpool', value: 'd_pool'},
        { label: 'EMCD Pool', value: 'emcd_pool'},
        { label: 'Fire Pool', value: 'fire_pool'},
        { label: 'Bitaxe', value: 'bitaxe'},
        { label: 'FutureBit Apollo', value: 'futurebit_apollo'},
        { label: 'Cathedra OS', value: 'cathedra_os'},
        { label: 'Bitmain', value: 'bitmain'},
        { label: 'Antminer', value: 'antminer'},

        // Other helpful keywords related to bitcoin
        { label: 'Wallet Software', value: 'wallet_software'},
        { label: 'Node', value: 'node'},
        { label: 'Lightning', value: 'lightning'},
        { label: 'eCash', value: 'ecash'},
        { label: 'Hardware wallet', value: 'hardware_wallet'},
        { label: 'Coinjoin', value: 'coinjoin'},
        { label: 'PayJoin', value: 'payjoin'},
        { label: 'PayNym', value: 'paynym'},
        { label: 'StoneWall', value: 'stonewall'},
        { label: 'Coin Control', value: 'coin_control'},
        { label: 'UTXO', value: 'utxo'},
        { label: 'UTXO Management', value: 'utxo_management'},
        { label: 'Tor', value: 'tor'},
        { label: 'Multisig wallets', value: 'multisig'},
        { label: 'Singlesig wallets', value: 'singlesig'},
        { label: 'SegWit', value: 'segwit'},
        { label: 'Taproot', value: 'taproot'},
        { label: 'Seed Phrase', value: 'seed_phrase'},
        { label: 'Lightning Dev Kit', value: 'ldk'},
        { label: 'Bitcoin Dev Kit', value: 'bdk'},
        { label: 'Lightning Service Provider', value: 'lsp'},
        { label: 'ZeroSync', value: 'zerosync'},
        { label: 'UTreexo', value: 'utreexo'},
        { label: 'Bitcoin ATM', value: 'bitcoin_atm'},
        { label: 'LN URL', value: 'ln_url'},
        { label: 'VPN', value: 'vpn'},
        { label: 'Seed Backups', value: 'seed_backups'},
        { label: 'Steel Plates', value: 'steel_plates'},
        { label: '3D Printing', value: '3dp'},
        { label: 'Nostr', value: 'nostr'},
        { label: 'Nostr Zaps', value: 'nostr_zaps'},
        { label: 'Verification', value: 'verification'},
    // Other helpful keywords for related to computers and infosec
        { label: 'Privacy', value: 'privacy'},
        { label: 'Security', value: 'security'},
        { label: 'Networking', value: 'networking'},
        { label: 'Linux', value: 'linux'},
        { label: 'NixOS', value: 'nix_os'},
        { label: 'Ubuntu', value: 'ubuntu'},
        { label: 'PopOS', value: 'pop_os'},
        { label: 'Qubes OS', value: 'qubes_os'},
        { label: 'Tails OS', value: 'tails_os'},
        { label: 'Windows', value: 'windows'},
        { label: 'MacOS', value: 'mac_os'},
        { label: 'GrapeneOS', value: 'graphene_os'},
        { label: 'CopperheadOS', value: 'copperhead_os'},
        { label: 'CalyxOS', value: 'calyx_os'},
        { label: 'Apple', value: 'apple'},
        { label: 'iPhone', value: 'iphone'},
        { label: 'Android', value: 'android'},
        { label: 'ARM', value: 'arm'},
        { label: 'Armbian', value: 'armbian'},
        { label: 'Raspberry Pi', value: 'raspberry_pi'},
        { label: 'Intel', value: 'intel'},
        { label: 'RISC', value: 'risc'},
        { label: 'AMD', value: 'amd'},
        { label: 'AARCH', value: 'aarch'},
        { label: 'ESP32', value: 'esp_32'},
        { label: 'STM32', value: 'stm_32'},
        { label: 'IoT', value: 'iot'},
        { label: 'NAS', value: 'nas'},
        { label: 'Self Hosting', value: 'self_hosting'},
        { label: 'Hosting', value: 'hosting'},
        { label: 'Desktop', value: 'desktop'},
        { label: 'Mobile', value: 'mobile'},
        { label: 'Terminal', value: 'terminal'},
        { label: 'Bash', value: 'bash'},
        { label: 'PowerShell', value: 'powershell'},
        { label: 'CLI', value: 'cli'},
        { label: 'Shell', value: 'shell'},
        { label: 'Console', value: 'console'},
        { label: 'Vim', value: 'vim'},
        { label: 'Browser', value: 'browser'},
        { label: 'Safari', value: 'safari'},
        { label: 'Google Chrome', value: 'google_chrome'},
        { label: 'Firefox', value: 'firefox'},
        { label: 'DuckDuckGo', value: 'duckduckgo'},
        { label: 'Opera', value: 'opera'},
        { label: 'Microsoft Edge', value: 'microsoft_edge'},
        { label: 'Vivaldi', value: 'vivaldi'},
        { label: 'Brave', value: 'brave'},
        { label: 'Tor browser', value: 'tor_browser'},
        { label: 'Mullvad Browser', value: 'mullad_browser'},
        { label: 'Servers', value: 'servers'},
        { label: 'QEMU', value: 'qemu'},
        { label: 'Web', value: 'web'},
        { label: 'API', value: 'api'},
        { label: 'Git', value: 'git'},
        { label: 'Databases', value: 'databases'},
        { label: 'Encryption', value: 'encryption'},
];
				
export default tagOptions; 
