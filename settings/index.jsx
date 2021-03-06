function clockfaceSettings(props) {
  return (
    <Page>
      <Section 
          description={<Text align="center">If settings do not apply automatically, open another app on the watch and return to the clockface.</Text>}
          title={<Text bold>Clockface Settings</Text>}>
        <Select
          label="Font"
          settingsKey="font"
          options={[
            {name:"System", value:"System-Bold"},
            {name:"Colfax", value:"Colfax-Medium"},
            {name:"Fabrikat", value:"Fabrikat-Bold"},
            {name:"Seville", value:"Seville-Bold"},
            {name:"SevilleSharp", value:"SevilleSharp-Bold"},
            {name:"Tungsten", value:"Tungsten-Medium"}
          ]}
        />
        <Toggle
          settingsKey="use24HourTime"
          label="Use 24 hour time"
        />
        <Toggle
          settingsKey="useMetricDistance"
          label="Show distance in metric"
        />
        <Toggle
          settingsKey="useIconColorForCornerText"
          label="Use icon color for corner text"
        />
        <Text>Icon L Color</Text>
        <ColorSelect
          settingsKey="backgroundColor"
          colors={[
             {color: '#fccc01'},{color: '#f805f8'},{color: '#58ced6'},{color: '#ffcdd2'}, {color: '#e57373'}, {color: '#f44336'}, {color: '#d32f2f'}, {color: '#b71c1c'}, {color: '#d50000'},
            {color: '#f8bbd0'}, {color: '#f06292'}, {color: '#e91e63'}, {color: '#c2185b'}, {color: '#880e4f'}, {color: '#c51162'},
            {color: '#e1bee7'}, {color: '#ba68c8'}, {color: '#9c27b0'}, {color: '#7b1fa2'}, {color: '#4a148c'}, {color: '#aa00ff'},
            {color: '#d1c4e9'}, {color: '#9575cd'}, {color: '#673ab7'}, {color: '#512da8'}, {color: '#311b92'}, {color: '#6200ea'},
            {color: '#c5cae9'}, {color: '#7986cb'}, {color: '#3f51b5'}, {color: '#303f9f'}, {color: '#1a237e'}, {color: '#304ffe'},
            {color: '#bbdefb'}, {color: '#64b5f6'}, {color: '#2196f3'}, {color: '#1976d2'}, {color: '#0d47a1'}, {color: '#2962ff'},
            {color: '#b3e5fc'}, {color: '#4fc3f7'}, {color: '#03a9f4'}, {color: '#0288d1'}, {color: '#01579b'}, {color: '#0091ea'},
            {color: '#b2ebf2'}, {color: '#4dd0e1'}, {color: '#00bcd4'}, {color: '#0097a7'}, {color: '#006064'}, {color: '#00b8d4'},
            {color: '#b2dfdb'}, {color: '#4db6ac'}, {color: '#009688'}, {color: '#00796b'}, {color: '#004d40'}, {color: '#00bfa5'},
            {color: '#c8e6c9'}, {color: '#81c784'}, {color: '#4caf50'}, {color: '#388e3c'}, {color: '#1b5e20'}, {color: '#00c853'},
            {color: '#dcedc8'}, {color: '#aed581'}, {color: '#8bc34a'}, {color: '#689f38'}, {color: '#33691e'}, {color: '#64dd17'},
            {color: '#f0f4c3'}, {color: '#dce775'}, {color: '#cddc39'}, {color: '#afb42b'}, {color: '#827717'}, {color: '#aeea00'},
            {color: '#fff9c4'}, {color: '#fff176'}, {color: '#ffeb3b'}, {color: '#fbc02d'}, {color: '#f57f17'}, {color: '#ffd600'},
            {color: '#ffecb3'}, {color: '#ffd54f'}, {color: '#ffc107'}, {color: '#ffa000'}, {color: '#ff6f00'}, {color: '#ffab00'},
            {color: '#ffe0b2'}, {color: '#ffb74d'}, {color: '#ff9800'}, {color: '#f57c00'}, {color: '#e65100'}, {color: '#ff6d00'},
            {color: '#ffccbc'}, {color: '#ff8a65'}, {color: '#ff5722'}, {color: '#e64a19'}, {color: '#bf360c'}, {color: '#dd2c00'},
            {color: '#d7ccc8'}, {color: '#a1887f'}, {color: '#795548'}, {color: '#5d4037'}, {color: '#3e2723'}, {color: '#ffffff'}, 
            {color: '#cfd8dc'}, {color: '#90a4ae'}, {color: '#607d8b'}, {color: '#455a64'}, {color: '#263238'}, {color: '#000000'},
            {color: '#f5f5f5'}, {color: '#e0e0e0'}, {color: '#9e9e9e'}, {color: '#616161'}, {color: '#212121'}
          ]}
        />
        <Text>Text Color</Text>
        <ColorSelect
          settingsKey="textColor"
          colors={[
            {color: '#fccc01'},{color: '#f805f8'},{color: '#58ced6'},{color: '#ffcdd2'}, {color: '#e57373'}, {color: '#f44336'}, {color: '#d32f2f'}, {color: '#b71c1c'}, {color: '#d50000'},
            {color: '#f8bbd0'}, {color: '#f06292'}, {color: '#e91e63'}, {color: '#c2185b'}, {color: '#880e4f'}, {color: '#c51162'},
            {color: '#e1bee7'}, {color: '#ba68c8'}, {color: '#9c27b0'}, {color: '#7b1fa2'}, {color: '#4a148c'}, {color: '#aa00ff'},
            {color: '#d1c4e9'}, {color: '#9575cd'}, {color: '#673ab7'}, {color: '#512da8'}, {color: '#311b92'}, {color: '#6200ea'},
            {color: '#c5cae9'}, {color: '#7986cb'}, {color: '#3f51b5'}, {color: '#303f9f'}, {color: '#1a237e'}, {color: '#304ffe'},
            {color: '#bbdefb'}, {color: '#64b5f6'}, {color: '#2196f3'}, {color: '#1976d2'}, {color: '#0d47a1'}, {color: '#2962ff'},
            {color: '#b3e5fc'}, {color: '#4fc3f7'}, {color: '#03a9f4'}, {color: '#0288d1'}, {color: '#01579b'}, {color: '#0091ea'},
            {color: '#b2ebf2'}, {color: '#4dd0e1'}, {color: '#00bcd4'}, {color: '#0097a7'}, {color: '#006064'}, {color: '#00b8d4'},
            {color: '#b2dfdb'}, {color: '#4db6ac'}, {color: '#009688'}, {color: '#00796b'}, {color: '#004d40'}, {color: '#00bfa5'},
            {color: '#c8e6c9'}, {color: '#81c784'}, {color: '#4caf50'}, {color: '#388e3c'}, {color: '#1b5e20'}, {color: '#00c853'},
            {color: '#dcedc8'}, {color: '#aed581'}, {color: '#8bc34a'}, {color: '#689f38'}, {color: '#33691e'}, {color: '#64dd17'},
            {color: '#f0f4c3'}, {color: '#dce775'}, {color: '#cddc39'}, {color: '#afb42b'}, {color: '#827717'}, {color: '#aeea00'},
            {color: '#fff9c4'}, {color: '#fff176'}, {color: '#ffeb3b'}, {color: '#fbc02d'}, {color: '#f57f17'}, {color: '#ffd600'},
            {color: '#ffecb3'}, {color: '#ffd54f'}, {color: '#ffc107'}, {color: '#ffa000'}, {color: '#ff6f00'}, {color: '#ffab00'},
            {color: '#ffe0b2'}, {color: '#ffb74d'}, {color: '#ff9800'}, {color: '#f57c00'}, {color: '#e65100'}, {color: '#ff6d00'},
            {color: '#ffccbc'}, {color: '#ff8a65'}, {color: '#ff5722'}, {color: '#e64a19'}, {color: '#bf360c'}, {color: '#dd2c00'},
            {color: '#d7ccc8'}, {color: '#a1887f'}, {color: '#795548'}, {color: '#5d4037'}, {color: '#3e2723'}, {color: '#ffffff'}, 
            {color: '#cfd8dc'}, {color: '#90a4ae'}, {color: '#607d8b'}, {color: '#455a64'}, {color: '#263238'}, {color: '#000000'},
            {color: '#f5f5f5'}, {color: '#e0e0e0'}, {color: '#9e9e9e'}, {color: '#616161'}, {color: '#212121'}
          ]}
        />
        <Text>Icon Color</Text>
        <ColorSelect
          settingsKey="iconColor"
          colors={[
            {color: '#fccc01'},{color: '#f805f8'},{color: '#58ced6'},{color: '#ffcdd2'}, {color: '#e57373'}, {color: '#f44336'}, {color: '#d32f2f'}, {color: '#b71c1c'}, {color: '#d50000'},
            {color: '#f8bbd0'}, {color: '#f06292'}, {color: '#e91e63'}, {color: '#c2185b'}, {color: '#880e4f'}, {color: '#c51162'},
            {color: '#e1bee7'}, {color: '#ba68c8'}, {color: '#9c27b0'}, {color: '#7b1fa2'}, {color: '#4a148c'}, {color: '#aa00ff'},
            {color: '#d1c4e9'}, {color: '#9575cd'}, {color: '#673ab7'}, {color: '#512da8'}, {color: '#311b92'}, {color: '#6200ea'},
            {color: '#c5cae9'}, {color: '#7986cb'}, {color: '#3f51b5'}, {color: '#303f9f'}, {color: '#1a237e'}, {color: '#304ffe'},
            {color: '#bbdefb'}, {color: '#64b5f6'}, {color: '#2196f3'}, {color: '#1976d2'}, {color: '#0d47a1'}, {color: '#2962ff'},
            {color: '#b3e5fc'}, {color: '#4fc3f7'}, {color: '#03a9f4'}, {color: '#0288d1'}, {color: '#01579b'}, {color: '#0091ea'},
            {color: '#b2ebf2'}, {color: '#4dd0e1'}, {color: '#00bcd4'}, {color: '#0097a7'}, {color: '#006064'}, {color: '#00b8d4'},
            {color: '#b2dfdb'}, {color: '#4db6ac'}, {color: '#009688'}, {color: '#00796b'}, {color: '#004d40'}, {color: '#00bfa5'},
            {color: '#c8e6c9'}, {color: '#81c784'}, {color: '#4caf50'}, {color: '#388e3c'}, {color: '#1b5e20'}, {color: '#00c853'},
            {color: '#dcedc8'}, {color: '#aed581'}, {color: '#8bc34a'}, {color: '#689f38'}, {color: '#33691e'}, {color: '#64dd17'},
            {color: '#f0f4c3'}, {color: '#dce775'}, {color: '#cddc39'}, {color: '#afb42b'}, {color: '#827717'}, {color: '#aeea00'},
            {color: '#fff9c4'}, {color: '#fff176'}, {color: '#ffeb3b'}, {color: '#fbc02d'}, {color: '#f57f17'}, {color: '#ffd600'},
            {color: '#ffecb3'}, {color: '#ffd54f'}, {color: '#ffc107'}, {color: '#ffa000'}, {color: '#ff6f00'}, {color: '#ffab00'},
            {color: '#ffe0b2'}, {color: '#ffb74d'}, {color: '#ff9800'}, {color: '#f57c00'}, {color: '#e65100'}, {color: '#ff6d00'},
            {color: '#ffccbc'}, {color: '#ff8a65'}, {color: '#ff5722'}, {color: '#e64a19'}, {color: '#bf360c'}, {color: '#dd2c00'},
            {color: '#d7ccc8'}, {color: '#a1887f'}, {color: '#795548'}, {color: '#5d4037'}, {color: '#3e2723'}, {color: '#ffffff'}, 
            {color: '#cfd8dc'}, {color: '#90a4ae'}, {color: '#607d8b'}, {color: '#455a64'}, {color: '#263238'}, {color: '#000000'},
            {color: '#f5f5f5'}, {color: '#e0e0e0'}, {color: '#9e9e9e'}, {color: '#616161'}, {color: '#212121'}
          ]}
        />
         <Text>Icon L Color</Text>
        <ColorSelect
          settingsKey="iconLColor"
          colors={[
            {color: '#fccc01'},{color: '#f805f8'},{color: '#58ced6'},{color: '#ffcdd2'}, {color: '#e57373'}, {color: '#f44336'}, {color: '#d32f2f'}, {color: '#b71c1c'}, {color: '#d50000'},
            {color: '#f8bbd0'}, {color: '#f06292'}, {color: '#e91e63'}, {color: '#c2185b'}, {color: '#880e4f'}, {color: '#c51162'},
            {color: '#e1bee7'}, {color: '#ba68c8'}, {color: '#9c27b0'}, {color: '#7b1fa2'}, {color: '#4a148c'}, {color: '#aa00ff'},
            {color: '#d1c4e9'}, {color: '#9575cd'}, {color: '#673ab7'}, {color: '#512da8'}, {color: '#311b92'}, {color: '#6200ea'},
            {color: '#c5cae9'}, {color: '#7986cb'}, {color: '#3f51b5'}, {color: '#303f9f'}, {color: '#1a237e'}, {color: '#304ffe'},
            {color: '#bbdefb'}, {color: '#64b5f6'}, {color: '#2196f3'}, {color: '#1976d2'}, {color: '#0d47a1'}, {color: '#2962ff'},
            {color: '#b3e5fc'}, {color: '#4fc3f7'}, {color: '#03a9f4'}, {color: '#0288d1'}, {color: '#01579b'}, {color: '#0091ea'},
            {color: '#b2ebf2'}, {color: '#4dd0e1'}, {color: '#00bcd4'}, {color: '#0097a7'}, {color: '#006064'}, {color: '#00b8d4'},
            {color: '#b2dfdb'}, {color: '#4db6ac'}, {color: '#009688'}, {color: '#00796b'}, {color: '#004d40'}, {color: '#00bfa5'},
            {color: '#c8e6c9'}, {color: '#81c784'}, {color: '#4caf50'}, {color: '#388e3c'}, {color: '#1b5e20'}, {color: '#00c853'},
            {color: '#dcedc8'}, {color: '#aed581'}, {color: '#8bc34a'}, {color: '#689f38'}, {color: '#33691e'}, {color: '#64dd17'},
            {color: '#f0f4c3'}, {color: '#dce775'}, {color: '#cddc39'}, {color: '#afb42b'}, {color: '#827717'}, {color: '#aeea00'},
            {color: '#fff9c4'}, {color: '#fff176'}, {color: '#ffeb3b'}, {color: '#fbc02d'}, {color: '#f57f17'}, {color: '#ffd600'},
            {color: '#ffecb3'}, {color: '#ffd54f'}, {color: '#ffc107'}, {color: '#ffa000'}, {color: '#ff6f00'}, {color: '#ffab00'},
            {color: '#ffe0b2'}, {color: '#ffb74d'}, {color: '#ff9800'}, {color: '#f57c00'}, {color: '#e65100'}, {color: '#ff6d00'},
            {color: '#ffccbc'}, {color: '#ff8a65'}, {color: '#ff5722'}, {color: '#e64a19'}, {color: '#bf360c'}, {color: '#dd2c00'},
            {color: '#d7ccc8'}, {color: '#a1887f'}, {color: '#795548'}, {color: '#5d4037'}, {color: '#3e2723'}, {color: '#ffffff'}, 
            {color: '#cfd8dc'}, {color: '#90a4ae'}, {color: '#607d8b'}, {color: '#455a64'}, {color: '#263238'}, {color: '#000000'},
            {color: '#f5f5f5'}, {color: '#e0e0e0'}, {color: '#9e9e9e'}, {color: '#616161'}, {color: '#212121'}
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(clockfaceSettings);